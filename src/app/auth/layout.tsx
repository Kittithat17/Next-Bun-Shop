interface AuthlayoutProps {
  children: React.ReactNode;
}

const Authlayout = ({ children }: AuthlayoutProps) => {
  return (
    <div className="flex flex-col justify-center min-h-svh">
      <main>{children}</main>
    </div>
  );
};
export default Authlayout;
