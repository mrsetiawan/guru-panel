import React from 'react';

const ScriptTag = (props) => (
    <>
      <script src="/plugins/jquery/jquery.min.js"></script>
      <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/dist/js/adminlte.min.js"></script>
      <script src="https://cdn.ckeditor.com/4.13.1/standard-all/ckeditor.js"></script>
      {props.children}
    </>
)

export default ScriptTag;