import React from 'react';
import AnimatedBook from '@/components/AnimatedBook';
import { GithubOutlined } from '@ant-design/icons';
import './style.less'
const RouteTwo = () => {
    return (
        <AnimatedBook
            key={1}
            cover={
                <div
                    className="cover-box"
                    style={{ background: '#f3b47e#f3b47e' }}
                >
                    <h3 className="title ellipsis">{'测试'}</h3>
                    <p className="ellipsis">{'测试描述'}</p>
                </div>
            }
            content={
                <div className="content-box">
                    <div className="btn">
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
                    </div>
                </div>
            }
            style={{ marginBottom: 100 }}
        />
    );
};
export default RouteTwo;
