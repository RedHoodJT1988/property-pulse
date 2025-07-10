import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse',
  description: 'Your go-to platform for real estate insights and property management.',
  keywords: 'rental, find rentals, find properties, property management, real estate insights',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div>
                {children}
            </div>
        </body>
    </html>
  )
}

export default MainLayout