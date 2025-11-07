const copy = {
    value: { label: "2025 @ todos los derechos reservados." },
}

const Copy = () => {
  return (
    <div className="bg-[#181818] text-white p-4 text-center">
      {Object.entries(copy).map(([key, { label }]) => (
        <div key={key}>
          <span className="italic">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default Copy
