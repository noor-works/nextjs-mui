import Container from '@mui/material/Container';

import Header from './Header';

type Props = {
    children: React.ReactNode,
}

export default function Layout({ children }: Props) {
    return (
        <>
            <div>
                <Header />
                <Container maxWidth="lg">
                    {children}
                </Container>
            </div>
        </>
    );
}