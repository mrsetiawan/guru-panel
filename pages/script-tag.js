import React from 'react';

const ScriptTag = (props) => (
    <>
      <script src="/plugins/jquery/jquery.min.js"></script>
      <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/dist/js/adminlte.min.js"></script>
      {props.children}
    </>
)

export default ScriptTag;