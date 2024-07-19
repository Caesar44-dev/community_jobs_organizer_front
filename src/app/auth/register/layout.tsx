// Modules
import { Metadata } from "next";

// Components
import Container from "@/components/templates/container";

// Metadata
export const metadata: Metadata = {
  title: 'Register',
  description: '',
}

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="bg-w-02 dark:bg-b-04 font-text-01 text-b-03 dark:text-w-01">
      {children}
    </Container>
  )
}

export default RegisterLayout;