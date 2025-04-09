import { FC, PropsWithChildren } from 'react'; 

const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
    <html>
        <body className='bg-slate-500'>
            {children}
        </body>
    </html>
    );
};

export default RootLayout;  