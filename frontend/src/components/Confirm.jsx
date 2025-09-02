function Confirm({ message, onConfirm }) {
  const handleClick = () => {
    const confirmed = window.confirm(message || "Are you sure?")
    if (confirmed && onConfirm) {
      onConfirm()
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    >
      Logout
    </button>
  )
}

export default Confirm
