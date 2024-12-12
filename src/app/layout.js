import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{ color: 'hotpink' }}>Copyright Josh Inc.</footer>
      </body>
    </html>
  );
}

export default RootLayout;
