import React from 'react'


const Content = ({children}:{children : React.ReactNode}) => {
  return (
    <div className="content">
        {children}
    </div>
  );
}

export default Content