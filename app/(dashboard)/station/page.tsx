import AuthGuard from "@/components/Authgaurd";
import StationMainComponent from "@/components/section/station/StationMainComponent";

  export default function Station() {
    return (
      <main className="bg-white">
      <AuthGuard>
     <StationMainComponent/>
     </AuthGuard>
    </main>
    );
  }
  