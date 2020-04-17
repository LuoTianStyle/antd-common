import React from 'react';
import { CopyrightCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const FooterText = styled.footer`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 50px;
`;
const Footer = () => {
    return (
        <FooterText>
            Copyright <CopyrightCircleOutlined />
            2019 蚂蚁金服体验技术部出品
        </FooterText>
    );
};

export default Footer;
