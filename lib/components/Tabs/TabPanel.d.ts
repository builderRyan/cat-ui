import * as React from 'react';
import { Component } from 'react';
export interface TabPanelProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 该TabPanel的id */
    id: string | number;
    /** 该TabPanel所对应的tab标签的名字	 */
    tab: string | React.ReactNode;
}
/**
 * TabPanel
 */
declare class TabPanel extends Component<TabPanelProps, any> {
    render(): JSX.Element;
}
export default TabPanel;
