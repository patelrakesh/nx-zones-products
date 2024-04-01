import {
  SharedHead,
  SharedLayout,
  SharedBody,
  DocLayout,
} from '@verizon-nextgen/shared/ui';

export const metadata = {
  title: 'Welcome to products',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedLayout>
      <SharedHead />
      <SharedBody>
        <DocLayout>{children}</DocLayout>
      </SharedBody>
    </SharedLayout>
  );
}