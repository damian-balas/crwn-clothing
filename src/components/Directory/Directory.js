import React from "react";
import { connect } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";
import {createStructuredSelector} from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import { DirectoryContainer } from "./Directory.styles";

const Directory = ({sections}) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
