import React, { useState } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
const Swatch = styled.div`
    padding: 5px;
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: block;
    margin: 20px 0;
    height: 24px;
    cursor: pointer;
`;
const Color = styled.div`
    width: 36px;
    height: 14px;
    border-radius: 2px;
    background: ${(props) => props.color};
`;
const Popover = styled.div`
    position: absolute;
    z-index: 2;
    line-height: 15px;
    .sketch-picker {
        width: 250px !important;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 2px,
            rgba(0, 0, 0, 0.15) 0px 4px 8px !important;
    }
`;
const Cover = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
const ColorPicker = (props) => {
    const defaultProps = {
        presetColors: [
            '#F5222D',
            '#FA541C',
            '#FA8C16',
            '#FAAD14',
            '#FADB14',
            '#A0D911',
            '#52C41A',
            '#13C2C2',
            '#1890FF',
            '#2F54EB',
            '#722ED1',
            '#EB2F96',
        ],
        disableAlpha: false, //禁用rgba
    };
    const { color, onChange } = props;
    const [colorPickerShow, setColorPickerShow] = useState(false);
    const handleChange = (color) => {
        const rgb = color.rgb;
        const colorRgb = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
        onChange(colorRgb);
    };
    return (
        <div>
            <Swatch onClick={() => setColorPickerShow(!colorPickerShow)}>
                <Color color={color} />
            </Swatch>
            {colorPickerShow ? (
                <Popover>
                    <Cover onClick={() => setColorPickerShow(false)} />
                    <SketchPicker
                        presetColors={defaultProps.presetColors}
                        disableAlpha={defaultProps.disableAlpha}
                        {...props}
                        color={color}
                        onChange={handleChange}
                    />
                </Popover>
            ) : null}
        </div>
    );
};

export default ColorPicker;
