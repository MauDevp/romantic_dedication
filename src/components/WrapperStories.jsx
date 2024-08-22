import React, { forwardRef } from 'react';
import Stories from 'stories-react';

const WrapperStories = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <Stories {...props} />
        </div>
    );
});

WrapperStories.displayName = 'WrapperStories';

export default WrapperStories;