package com.oukingtim.mapper;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;
import com.oukingtim.domain.Category;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * <br>创建日期：2018/3/24
 *
 * @author JackieChan</b>
 * @version 1.****</b>
 */

public interface CategoryInfoMapper extends BaseMapper<Category> {


    /**
     * 查询行业分类
     *
     * @param patrentId
     * @param name
     * @return
     */
    @Select(
            "select *from category t where 1=1" +
                    "<if test=parentId != null and parentId !='' >" +
                    "and t.parentId = #{parentId}" +
                    " </if>"+
                    "<if test=name != null and name !='' >" +
                    "and t.name = #{name}" +
                    " </if>"+
                    "order by parent_id asc"
    )
    List<Category> queryCategoryInfo(Pagination page,@Param("parentId") String patrentId, @Param("name") String name);

    /**
     * 添加行业
     *
     * @param category
     * @return
     */
    @Insert(
            "insert into category values(#{categoryId},#{name},#{createTime},#{updateTime},#{delete})"
    )
    int insertCategory(Category category);

    /**
     * 删除行业（删除子行业)
     *
     * @param category
     * @return
     */
    @Update(
            "update category set delete =#{delete} where id = #{id}; "
    )
    int delectSubCategory(Category category);

    /**
     * 删除行业（删除父行业)
     *
     * @param category
     * @return
     */
    @Update(
            "update category set par_delete =#{delete} where parent_id = #{parent_id}; "
    )
    int delectParCategory(Category category);


}
