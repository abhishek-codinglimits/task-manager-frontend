export default function PageHeader({ title, description }) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
        {title}
      </h1>
      <p className="mt-2 text-gray-600">{description}</p>
    </header>
  );
}
