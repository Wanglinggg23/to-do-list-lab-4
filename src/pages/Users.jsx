import UserInfoCard from "../components/UserInfoCard";

function Users() {
  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">
          User Information
        </h1>

        <p className="mb-6 text-gray-500">
          Sample user information retrieved from the DummyJSON API.
        </p>

        <UserInfoCard />
      </div>
    </main>
  );
}

export default Users;