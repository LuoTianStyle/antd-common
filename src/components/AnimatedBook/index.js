import React, { useState } from 'react';
import styled from 'styled-components';
const Containner = styled.div`
    padding-left: 200px;
    display: inline-block;
    margin: 20px 0;
`;
const Book = styled.div`
    position: relative;

    width: 160px;
    height: 220px;
    perspective: 1000px;
    transform-style: preserve-3d;
    li::before,
    li::after {
        content: '';
    }
    ul {
        margin-bottom: 0;
        list-style: none;
    }
    li {
        list-style: none;
    }
`;
const Front = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    transform-origin: 0% 100%;
    transform: ${(props) =>
        props.hover
            ? 'rotateY(-145deg) translateZ(0)'
            : 'rotateY(-34deg) translateZ(8px)'};
    z-index: ${(props) => (props.hover ? 0 : 100)};
    li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }
    li:first-child {
        transform: translateZ(2px);
        background-color: #eee;
        &::before,
        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
            background: #999;
        }
        &::before {
            transform: rotateY(90deg) translateZ(-2px) translateX(2px);
        }
        &::after {
            transform: rotateY(90deg) translateZ(158px) translateX(2px);
        }
    }
    li:last-child {
        transform: rotateY(180deg) translateZ(2px);
        background: #fffbec;
        &::before,
        &::after {
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: 0px 0px 30px 5px #333;
            transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
                translateX(-2px) translateY(-78px);
            width: 4px;
            height: 160px;
        }
    }
`;
const Page = styled.ul`
    position: relative;
    width: 100%;
    height: 98%;
    top: 1%;
    left: 3%;
    z-index: 10;
    transform-style: preserve-3d;

    li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform-origin: left center;
        transition-property: transform;
        transition-timing-function: ease;
        border-radius: 0px 5px 5px 0px;
        background: -webkit-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1),
            inset -1px 0px 1px rgba(150, 150, 150, 0.2);
    }

    li:nth-child(1) {
        transform: ${(props) =>
            props.hover ? 'rotateY(-30deg)' : 'rotateY(-28deg)'};
        transition-duration: ${(props) => (props.hover ? '1.5s' : '0.6s')};
    }

    li:nth-child(2) {
        transform: ${(props) =>
            props.hover ? 'rotateY(-35deg)' : 'rotateY(-30deg)'};
        transition-duration: ${(props) => (props.hover ? '1.8s' : '0.6s')};
    }

    li:nth-child(3) {
        transform: ${(props) =>
            props.hover ? 'rotateY(-118deg)' : 'rotateY(-32deg)'};
        transition-duration: ${(props) => (props.hover ? '1.6s' : '0.4s')};
    }

    li:nth-child(4) {
        transform: ${(props) =>
            props.hover ? 'rotateY(-130deg)' : 'rotateY(-34deg)'};
        transition-duration: ${(props) => (props.hover ? '1.4s' : '0.5s')};
    }

    li:nth-child(5) {
        transform: ${(props) =>
            props.hover ? 'rotateY(-140deg)' : 'rotateY(-36deg)'};
        transition-duration: ${(props) => (props.hover ? '1.2s' : '0.6s')};
    }
`;
const Back = styled.ul`
    transform-origin: 0% 100%;
    transform: rotateY(-15deg) translateZ(-8px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }
    li:first-child {
        transform: translateZ(2px);
        background: #fffbec;
        &::before,
        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: #999;
        }
        &::before {
            transform: rotateY(90deg) translateZ(-2px) translateX(2px);
        }
        &::after {
            transform: rotateY(90deg) translateZ(158px) translateX(2px);
        }
    }
    li:last-child {
        transform: translateZ(-2px);
        background: #fffbec;
        &::before,
        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 160px;
            background: #999;
        }
        &::before {
            transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
                translateX(2px) translateY(-78px);
            box-shadow: 10px -1px 80px 20px #666;
        }
    }
`;
const AnimatedBooks = (props) => {
    const { cover, content, style = {} } = props;
    const [hover, setHover] = useState(false);
    return (
        <Containner style={style}>
            <Book
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Front hover={hover}>
                    <li>{cover}</li>
                    <li></li>
                </Front>
                <Page hover={hover}>
                    <li></li>
                    <li>{content}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </Page>
                <Back hover={hover}>
                    <li></li>
                    <li></li>
                </Back>
            </Book>
        </Containner>
    );
};

export default AnimatedBooks;
