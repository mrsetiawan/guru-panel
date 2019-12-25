import React from 'react';
import Layout from '../../components/Layout';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import MathType from '@wiris/mathtype-ckeditor5';



export default class FormEntryCourse extends React.Component {

render() {
  if (typeof window === 'undefined') {
    return (<textarea></textarea>)
  }else{
  const CKEditor = require('@ckeditor/ckeditor5-react');
  const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
  // const MathpreviewPlugin = require('ckeditor5-math-preview');
  // const MathType = require('@wiris/mathtype-ckeditor5');

  // ClassicEditor.builtinPlugins = [MathpreviewPlugin];
  ClassicEditor.defaultConfig = {
    toolbar: {
      items: [
          'MathType', 
          'ChemType',
          'heading',
          // '|',
          // 'alignment',                                                 // <--- ADDED
          // 'bold',
          // 'italic',
          // 'link',
          // 'bulletedList',
          // 'numberedList',
          // 'imageUpload',
          // 'blockQuote',
          // 'undo',
          // 'redo'
      ]
  },
  image: {
      toolbar: [
          // 'imageStyle:full',
          // 'imageStyle:side',
          // '|',
          // 'imageTextAlternative'
      ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
  }

  return(
    <Layout title="Guru Ahli : Home">
    <div className="content-wrapper">
        <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Create A Course</h1>
                        </div>
                    </div>
                </div>
            </div>
        <div className="content">
        <div className="row">
        <div className="col-md-12">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                Form Entry Course
              </h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fas fa-minus"></i></button>
                <button type="button" className="btn btn-tool btn-sm" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                  <i className="fas fa-times"></i></button>
              </div>
            </div>
            <div className="card-body pad">
              <div className="mb-3">
              <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
  </Layout>
    )
                  }
  }
}

