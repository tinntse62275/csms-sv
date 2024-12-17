import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select } from 'antd';

import { homeAPI } from '@/config'

const Category = ({ setCategoryId, categoryName, setCategoryName }) => {
    const [categoryList, setCategoryList] = useState([])
    const [options, setOptions] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const result = await axios.get(`${homeAPI}/category/nest-list`);
                setCategoryList(result.data)
            } catch (err) {
                console.log(err);
                // setCategoryList(fakeCategoryList);
            }
        }

        fetchCategory()
    }, [])

    useEffect(() => {
        let options = categoryList.map((categoryLevel1) => {
            let categoryLevel2List = categoryLevel1.children
            let options = categoryLevel2List.map((categoryLevel2) => {
                let option = { label: categoryLevel2.title, value: categoryLevel2.category_id }
                return option
            })

            return {
                label: categoryLevel1.title,
                options: options
            }
        })
        setOptions(options)
    }, [categoryList])

    return (
        <div className='category col-12'>
            <div className="">
                <Select
                    id='product-category'
                    value={!categoryName ? null : categoryName}
                    options={options}
                    placeholder={'Select product category'}
                    style={{ width: '100%' }}
                    onChange={(value, option) => { setCategoryId(value); setCategoryName(option.label) }}
                />
            </div>
        </div>
    )
}

export default Category