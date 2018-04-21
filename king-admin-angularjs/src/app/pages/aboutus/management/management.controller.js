(function () {
    'use strict';

    angular.module('KingAdmin.pages.aboutus.management')
        .controller('AboutUsCtrl', AboutUsCtrl);

    angular.module('KingAdmin.pages.aboutus.management').config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
        ngQuillConfigProvider.set();
    }]);

    /** @ngInject */
    function AboutUsCtrl($scope, $timeout, toastr, $stateParams, $state, AboutUsService) {

        var kt = this;
        var quillEditor;
        kt.aboutus = {};

        if ($stateParams.isView) {
            kt.isView = true;
        } else {
            kt.isView = false;
        }

        //由id判断是新增还是修改/查看（回显数据）
        if ($stateParams.id) {
            AboutUsService.getInfo({id: $stateParams.id},
                function (data) {
                    kt.aboutus = data;

                    if (kt.aboutus.detail) {
                        kt.customDetail = JSON.parse(kt.aboutus.detail);
                    }

                })
        } else {
            kt.isAdd = true;
        }

        //保存新增／修改的数据
        kt.save = function () {
            kt.aboutus.detail = JSON.stringify(kt.customDetail);
            AboutUsService.save(kt.aboutus, function (data) {
                $state.go('aboutus.management');
            });
        }

        kt.basicConfig = {
            core: {
                check_callback: true,
                worker: true
            },
            'types': {
                'default': {
                    'icon': false
                }
            },
            "checkbox": {
                "keep_selected_style": false
            },
            'plugins': ['types', "wholerow", 'checkbox'],
            'version': 1
        };


        /*========初始化quill==============*/

        $scope.editorCreated = function (editor) {
            console.log(editor);
            $scope.readonly = kt.isView
            quillEditor = editor;
            if (editor) {
                var toolbar = quillEditor.getModule('toolbar');
                editor.getModule("toolbar").addHandler("image", function () {
                    selectImage(toolbar);
                });
            }

        }

        //
        $scope.contentChanged = function (editor, html, text) {
            $scope.changeDetected = true;
            kt.exhibition.exhibitionDetail.description = html;
        }

        //选择图片
        function selectImage(toolbar) {
            var fileInput = toolbar.container.querySelector('input.ql-image[type=file]');
            if (fileInput == null) {
                fileInput = document.createElement('input');
                fileInput.setAttribute('type', 'file');
                fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
                fileInput.classList.add('ql-image');
                fileInput.addEventListener('change', function () {
                    if (fileInput.files != null && fileInput.files[0] != null) {
                        saveToServer(fileInput.files[0]);
                    }
                });
                toolbar.container.appendChild(fileInput);
            }
            fileInput.click();
        };

        // 上传到服务器@param {File} file
        function saveToServer(file) {
            //upload on server
            const fd = new FormData();
            fd.append('image', file);

            AboutUsService.uploadFile(fd,
                function (data) {
                    if (data && data.code == 0) {
                        insertToEditor(data.result[0]);
                    }
                })
        }

        //回显到quill 文本框中
        function insertToEditor(url) {
            // push image url to rich editor.
            var range = quillEditor.getSelection();
            var imagePosition = 0;
            if (range) {
                imagePosition = range.index;
            }
            quillEditor.insertEmbed(imagePosition, 'image', url + imageSize);
        }


        //自定义详情部分
        kt.customDetail = [];
        var detail = {
            detailTitle: '',
            detailContent: ''
        };

        $scope.addDetail = function () {
            var copyDetail = angular.copy(detail);
            kt.customDetail.push(copyDetail);
        }

        $scope.removeDetail = function (item) {
            var index = kt.customDetail.indexOf(item);
            kt.customDetail.splice(index, 1);
        }

        /*//自定义展会简介
         kt.customBriefInfo = [];
         var briefInfo = {
         key: '',
         value: ''
         };

         $scope.addBriefInfo = function () {
         var copyDetail = angular.copy(briefInfo);
         kt.customBriefInfo.push(copyDetail);
         }

         $scope.removeBriefInfo = function (item) {
         var index = kt.customBriefInfo.indexOf(item);
         kt.customBriefInfo.splice(index, 1);
         }
         */

    }
})();