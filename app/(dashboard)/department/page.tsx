import AuthGuard from "@/components/Authgaurd";
import DepartmentMain from "@/components/section/department/DepartmentMain";

export default function Department() {
  return (
    <main className="bg-white">
      <AuthGuard>
        <DepartmentMain />
      </AuthGuard>
    </main>
  );
}
