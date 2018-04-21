## 项目说明
# king-admin
king-admin是一个超酷的前后端分离的基础权限管理后台，前端：angularJs+bootstrap+gulp，后端：spring-boot+mybatis-plus(分java版和kotlin版)

## [项目演示](http://112.74.40.9)
账号：kt
密码：kt

## 项目部署

执行 king-admin.sql

前端：
```
cd king-admin-angularjs

npm install -g gulp cnpm bower

cnpm install

bower install

gulp serve
```
http://localhost:5000

后端：

```
cd king-admin-java  或者 cd king-admin-kotlin

mvn install -Dmaven.test.skip=true
```
运行 KingAdminJavaApplication.java 或者 KingAdminKotlinApplication.kt

http://localhost:8080

## 注：
java用了lombok注解简化代码，请下载lombok插件
如果不前后端分离部署，可以cd king-admin-angularjs 运行 gulp 命令打包生成static 
然后替换到java或kotlin的resource里

## 未完成
angular4版本
king-admin-angular ：Angular + Bootstrap4 + Webpack 

vue版本
king-admin-vue : vue2 + es6 + webpack

## 效果展示

![image](https://github.com/oukingtim/king-admin/blob/master/screenshots/login.png)
![image](https://github.com/oukingtim/king-admin/blob/master/screenshots/home.png)
![image](https://github.com/oukingtim/king-admin/blob/master/screenshots/userlist.png)
![image](https://github.com/oukingtim/king-admin/blob/master/screenshots/user.png)
![image](https://github.com/oukingtim/king-admin/blob/master/screenshots/role.png)
![image](https://github.com/oukingtim/king-admin/blob/master/screenshots/menu.png)
![image](https://github.com/oukingtim/king-admin/blob/master/screenshots/phone1.png)
![image](https://github.com/oukingtim/king-admin/blob/master/screenshots/phone2.png)



## 鸣谢

[Blur Admin](http://akveo.github.io/blur-admin/)

[mybatis-plus](https://git.oschina.net/baomidou/mybatis-plus)

## License
[MIT](LICENSE.txt) license.


据说有一位软件工程师，一位硬件工程师和一位项目经理同坐车参加研讨会。不幸在从盘山公路下山时坏在半路上了。于是两位工程师和一位经理就如何修车的问题展开了讨论。
硬件工程师说：“我可以用随身携带的瑞士军刀把车坏的部分拆下来，找出原因，排除故障。”
项目经理说：“根据经营管理学，应该召开会议，根据问题现状写出需求报告，制订计划，编写日程安排，逐步逼近，alpha测试，beta1测试和beta2测试解决问题。”
软件工程说：“咱们还是应该把车推回山顶再开下来，看看问题是否重复发生。”