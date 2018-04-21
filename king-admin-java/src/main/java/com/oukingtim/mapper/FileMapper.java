package com.oukingtim.mapper;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.oukingtim.domain.File;

import java.util.List;

/**
 * <br>创建日期：2018/4/15
 *
 * @author JackieChan</b>
 * @version 1.****</b>
 */

public interface FileMapper extends BaseMapper<File> {
    List<File> selectVisaInfo();
}