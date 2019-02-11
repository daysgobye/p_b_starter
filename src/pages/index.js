import React, { Component } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Link to={"/StoryBook/"}>Story Book</Link>
      </Layout>
    );
  }
}

export default IndexPage;