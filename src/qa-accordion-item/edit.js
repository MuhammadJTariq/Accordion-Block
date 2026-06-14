import { BlockControls, RichText, InnerBlocks } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="qa-item">
            <div className="title-area">
			<RichText
				tagName="h4"
				className="qa-title"
				value={ attributes.title }
				onChange={ ( title ) => setAttributes( { title } ) }
				placeholder="Accordion Title"
			/>
             <span class="dashicons dashicons-plus-alt2"></span>
            </div>
			<div className="qa-content">
				<InnerBlocks />
			</div>
		</div>
	);
}
