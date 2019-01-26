/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
/* App imports */
import TagList from '../../../components/tag-list'
import * as style from './heading.module.less'

const Heading = ({ title, tags, cover }) => (
  <div className={style.header}>
    <div className={style.title}>
      <h1>{title}</h1>
      <TagList tags={tags} />
    </div>
    <div className={style.cover}>
      <Img fluid={cover} title={title}/>
    </div>
  </div>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    fluid: PropTypes.object.isRequired
  }).isRequired
}

export default Heading