import * as React from 'react';
import { Link } from 'react-router';
import { Menu } from 'antd';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const profileRouterList = [
    {
        key: 'index',
        path: '/admin',
    },
    {
        key: 'qr_code',
        path: '/admin/qr_code',
    },
    {
        key: 'book_address',
        path: '/admin/book_address',
    }
];

interface MenuProps {
    pathname: string;
}

export default class AdminMenu extends React.Component<MenuProps, {}> {
    state = {
        selectedKey: [profileRouterList[0].key]
    };

    componentDidMount() {
        this.setSelectedKey();
    }

    componentWillReceiveProps(nextProps: MenuProps) {
        const {pathname: nextPathName} = nextProps;
        const {pathname} = this.props;
        if (pathname !== nextPathName) {
            this.setSelectedKey(nextProps);
        }
    }

    setSelectedKey(props: MenuProps = this.props) {
        const {pathname} = props;
        const newSelectedObject = profileRouterList.find(({path}) => path === pathname);
        if ( newSelectedObject ) {
            this.setState({
                selectedKey: [newSelectedObject.key]
            });
        }
    }
    render() {
        return (
            <Menu
                style={{ width: 200 }}
                selectedKeys={this.state.selectedKey}
                defaultOpenKeys={['index']}
                mode="inline"
            >
                <Menu.Item key="index" style={{width: '100%'}}>
                    <Link to="/admin">充值中心</Link>
                </Menu.Item>
                <Menu.Item key="book_address" style={{width: '100%'}}>
                    <Link to="/admin/book_address">按 ISBN 查询订单</Link>
                </Menu.Item>
            </Menu>
        );
    }
}