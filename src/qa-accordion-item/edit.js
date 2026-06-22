import { BlockControls, RichText, InnerBlocks } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton} from '@wordpress/components';
import icon from './icon.png';

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
              <img src={icon} alt='' />
            </div>
			<div className="qa-content">
				<InnerBlocks 
				allowedBlocks={[
						'core/paragraph',
						'core/list',
						'core/image'
					]}
					placeholder="Add answer content..."
				
				/>
			</div>
		</div>
	);
}
