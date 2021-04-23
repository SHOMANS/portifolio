import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretUp,
  faCaretDown,
  faCaretRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

library.add(faCaretUp, faCaretDown, faCaretRight, faCaretLeft);

export default function Icons(props) {
  const { iconName } = props;
  return <FontAwesomeIcon curserp icon={iconName} />;
}
