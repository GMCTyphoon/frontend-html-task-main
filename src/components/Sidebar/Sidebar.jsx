import styled from "styled-components";
import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 16px;
  height: 90vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-sidebar-background-dark-default)"
      : "var(--color-sidebar-background-light-default)"};
  border-radius: 16px;
  backdrop-filter: blur(12px);
  border: 4px solid
    ${(props) =>
      props.color === "dark"
        ? "var(--color-sidebar-background-dark-hover)"
        : "var(--color-sidebar-background-light-hover)"};

  width: 60px;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  span {
    opacity: 0;
    visibility: hidden;
    width: 0px;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  &.opened {
    width: 200px;
    align-items: flex-start;

    span {
      opacity: 1;
      visibility: visible;
      width: 100px;
    }
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) =>
      props.color === "dark"
        ? "var(--color-text-logo-dark-default)"
        : "var(--color-text-logo-light-default)"};
  }

  div {
    cursor: pointer;
    color: ${(props) =>
      props.color === "dark"
        ? "var(--color-text-dark-default)"
        : "var(--color-text-light-default)"};
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-button-background-dark-default)"
        : "var(--color-button-background-light-default)"};
    width: 24px;
    height: 24px;
    border-radius: 12px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: -30px;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    svg {
      transform: rotate(180deg);
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }

  &.opened {
    gap: 10px;
    div {
      right: -12px;
      background-color: ${(props) =>
        props.color === "dark"
          ? "var(--color-button-background-dark-active)"
          : "var(--color-button-background-light-active)"};
      svg {
        transform: rotate(0deg);
      }
    }
  }
`;

const RoutesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;

  div {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    gap: 0px;
    padding: 12px;
    cursor: pointer;
    border-radius: 8px;
    color: ${(props) =>
      props.color === "dark"
        ? "var(--color-text-dark-default)"
        : "var(--color-text-light-default)"};
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-sidebar-background-dark-default)"
        : "var(--color-sidebar-background-light-default)"};
    &:hover {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-dark-hover)"
          : "var(--color-text-light-hover)"};
      background-color: ${(props) =>
        props.color === "dark"
          ? "var(--color-sidebar-background-dark-hover)"
          : "var(--color-sidebar-background-light-hover)"};
    }
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:active {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-dark-active)"
          : "var(--color-text-light-active)"};
      background-color: ${(props) =>
        props.color === "dark"
          ? "var(--color-sidebar-background-dark-active)"
          : "var(--color-sidebar-background-light-active)"};
    }
  }
  &.opened {
    div {
      gap: 12px;
      width: 100%;
    }
  }
`;

const BottomRoutesContainer = styled(RoutesContainer)`
  margin-top: auto;
  margin-bottom: 16px;
`;

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(true);
  const containerClassnames = classnames("sidebar", { opened: isOpened });
  const sidebarHeaderClassnames = classnames("sidebar-header", {
    opened: isOpened,
  });
  const routesContainerClassnames = classnames("routes-container", {
    opened: isOpened,
  });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <SidebarContainer color={color} className={containerClassnames}>
      <SidebarHeader color={color} className={sidebarHeaderClassnames}>
        <img src={logo} alt="TensorFlow logo" />
        <span>TensorFlow</span>
        <div onClick={toggleSidebar}>
          <FontAwesomeIcon icon={"angle-left"} />
        </div>
      </SidebarHeader>
      <RoutesContainer color={color} className={routesContainerClassnames}>
        {routes.map((route) => (
          <div
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
            }}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </div>
        ))}
      </RoutesContainer>
      <BottomRoutesContainer
        color={color}
        className={routesContainerClassnames}
      >
        {bottomRoutes.map((route) => (
          <div
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
            }}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </div>
        ))}
      </BottomRoutesContainer>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
