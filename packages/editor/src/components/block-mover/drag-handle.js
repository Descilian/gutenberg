/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import BlockDraggable from '../block-draggable';

export const IconDragHandle = ( { isVisible, className, icon, onDragStart, onDragEnd, blockElementId, order, rootClientId, clientId, layout } ) => {
	if ( ! isVisible ) {
		return null;
	}

	const dragHandleClassNames = classnames( 'editor-block-mover__control-drag-handle', className );

	return (
		<BlockDraggable
			blockElementId={ blockElementId }
			rootClientId={ rootClientId }
			clientId={ clientId }
			order={ order }
			layout={ layout }
			onDragStart={ onDragStart }
			onDragEnd={ onDragEnd }
		>
			{
				( { onDraggableStart, onDraggableEnd } ) => (
					<div
						className={ dragHandleClassNames }
						aria-hidden="true"
						onDragStart={ onDraggableStart }
						onDragEnd={ onDraggableEnd }
						draggable
					>
						{ icon }
					</div>
				) }
		</BlockDraggable>
	);
};
