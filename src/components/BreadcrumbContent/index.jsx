import React from 'react';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';
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

const BreadcrumbContent = () => {
    return (
        <>
            <ContentBreadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </ContentBreadcrumb>
            <ContentCenter>1</ContentCenter>
        </>
    );
};

export default BreadcrumbContent;
