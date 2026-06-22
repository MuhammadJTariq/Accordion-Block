import { RichText, InnerBlocks } from '@wordpress/block-editor';
import icon from './icon.png';
export default function save( { attributes } ) {
	return (
		<div className="qa-item">
             <div className="title-area">
			<RichText.Content
				tagName="h4"
				className="qa-title"
				value={ attributes.title }
			/>
            <img src={icon} alt='' />
            </div>
			<div className="qa-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
