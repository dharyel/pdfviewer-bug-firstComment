import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {

  const [viewer, setViewer] = React.useState<PdfViewerComponent | null>(null)
  return (
  <div>
    <div className='control-section'>
        <PdfViewerComponent
          ref={(scope) => setViewer(scope)}
          id="container" 
          documentPath="PDF_Succinctly.pdf" 
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" 
          style={{ 'height': '100vh' }}
          isCommandPanelOpen={true}
          isAnnotationToolbarOpen={true}
          enableCommentPanel={true}
          toolbarSettings={{
            showTooltip: true,
            toolbarItems: ['UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'CommentTool', 'AnnotationEditTool', 'SearchOption', 'PrintOption', 'DownloadOption'],
            annotationToolbarItems: ['HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool', 'AnnotationDeleteTool', 'StampAnnotationTool', 'HandWrittenSignatureTool', 'InkAnnotationTool', 'ShapeTool', 'CalibrateTool', 'StrokeColorEditTool', 'ThicknessEditTool', 'FreeTextAnnotationTool', 'FontFamilyAnnotationTool', 'FontSizeAnnotationTool', 'FontStylesAnnotationTool', 'FontAlignAnnotationTool', 'FontColorAnnotationTool', 'CommentPanelTool'],
            formDesignerToolbarItems: ['TextboxTool', 'PasswordTool', 'CheckBoxTool', 'RadioButtonTool', 'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool']
          }}
          annotationAdd={(args) => {
            console.log("annotationAdd: ", args);
          }}
          annotationSelect={(args) => {
            console.log("annotationSelect: ", args);
          }}
          commentAdd={(args) => {
            console.log("commentAdd: ", args);
            console.log("annotationCollection: ", viewer?.annotationCollection);
          }}
        >
            <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]} />
        </PdfViewerComponent>
    </div>
  </div>);
}

export default App;
