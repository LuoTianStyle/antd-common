import React, { useEffect, useState } from 'react';
import AnimatedBook from '@/components/AnimatedBook';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const Containner = styled.div`
    font-size: 0;
`;
const Cover = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 0 10px;
    font-size: 12px;
    text-align: center;
    background: #f3b47e;
`;
const Title = styled.div`
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const Descrip = styled.div`
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const LinkBtn = styled.div`
    display: inline-block;
    border: 2px solid #2c3e50;
    color: #2c3e50;
    padding: 5px;
    cursor: pointer;
    transition: all 0.3s;
    a {
        color: #2c3e50;
        margin: 0 3px;
        font-size: 14px;
    }
    &:hover {
        border: ${(props) => `2px solid ${props.color}`};
        a {
            color: ${(props) => props.color};
        }
    }
`;

const Works = () => {
    const [color, setColor] = useState('#f1892d');
    const colors = ['#f3b47e', '#83d3d3', '#8bc2e8', '#a3c7a3'];
    useEffect(() => {
        const userTheme = JSON.parse(localStorage.getItem('user-theme'));
        if (userTheme) {
            const defaultColor = userTheme['@primary-color'];
            setColor(defaultColor);
        }
    }, []);
    return (
        <Containner>
            {[1, 2, 3, 4, 5].map((_, index) => (
                <AnimatedBook
                    style={{ marginBottom: 100 }}
                    key={index}
                    cover={
                        <Cover style={{ background: colors[index % 4] }}>
                            <Title>测试</Title>
                            <Descrip>测试描述</Descrip>
                        </Cover>
                    }
                    content={
                        <Content>
                            <LinkBtn color={color}>
                                <a
                                    href={'http://wwww.baidu.com'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubOutlined />
                                </a>
                                <a
                                    href={'http://wwww.baidu.com'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    预览地址
                                </a>
                            </LinkBtn>
                        </Content>
                    }
                />
            ))}
        </Containner>
    );
};
export default Works;
