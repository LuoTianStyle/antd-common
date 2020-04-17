import React from 'react';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { RouteMap } from '@/router';
const { Item } = Breadcrumb;
const ContentCenter = styled.div`
    margin: 24px 24px 0 24px;
    min-height: calc(100vh - 64px - 50px - 50px - 24px);
    background: #fff;
    padding: 24px;
`;
const ContentBreadcrumb = styled(Breadcrumb)`
    background: #fff;
    height: 50px;
    line-height: 50px;
    padding-left: 24px;
`;
const ItemLink = styled(Item)`
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        color: #f1892d;
    }
`;
const BreadcrumbContent = (props) => {
    const { history } = props;
    const currentPath = history.location.pathname.substr(1);
    const currentPane = RouteMap.find((item) => item.path === currentPath);
    const Content = currentPane.component;
    const LinkTo = (e) => {
        history.push(e);
    };
    return (
        <>
            <ContentBreadcrumb>
                <ItemLink onClick={() => LinkTo('/index')}>首页</ItemLink>
                {currentPane.path !== 'index'
                    ? currentPane.text.map((item, key) => (
                          <Item key={key}>{item}</Item>
                      ))
                    : ''}
            </ContentBreadcrumb>
            <ContentCenter>
                <Content />
            </ContentCenter>
        </>
    );
};

export default withRouter(BreadcrumbContent);
