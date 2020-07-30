import React from "react";
import { connect } from "react-redux";
import { withNaming } from "@bem-react/classname";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { getInfo } from "../../redux/temp";
import "./Header.less";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-header");

class Header extends React.Component {
  componentDidMount() {
    const { getInfo } = this.props;

    getInfo();
  }

  render() {
    return (
      <header className={b()}>
        <div className={b("place-wrapper")}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="lg"
            className={b("map-icon")}
          />
          <span className={b("city-name")}>Йошкар-Ола</span>
        </div>
        <div className={b("user-wrapper")}>
          <Avatar icon={<UserOutlined />} className={b("avatar")} />
          <div className={b("user-name")}>Роман</div>
        </div>
        <Button
          type="link"
          // icon={<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />}
          icon={<FontAwesomeIcon icon={faSignOutAlt} size="lg" />}
          className={b("logout-button")}
        >
          <span className="visually-hidden">Выйти</span>
        </Button>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getInfo: () => dispatch(getInfo()),
  };
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Header);

export { connectedComponent as Header };
