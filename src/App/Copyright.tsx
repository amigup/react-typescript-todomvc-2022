import React, { memo } from 'react'

const Copyright: React.FC = memo(
  () => (
    <footer className="info" style={{position: "absolute", bottom: "0px", right: "0px"}}>
      <p>
        Created by{' '}
        <a href="https://ryota-murakami.github.io/">Ryota Murakamai</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  ),
  () => true,
)

export default Copyright
