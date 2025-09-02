function Alert({ type = "error", message }) {
  const baseStyle =
    "p-4 mb-4 rounded-lg text-sm font-medium flex items-center gap-2"

  const styles = {
    error: "bg-red-100 text-red-700 border border-red-400",
    success: "bg-green-100 text-green-700 border border-green-400",
    warning: "bg-yellow-100 text-yellow-700 border border-yellow-400",
    info: "bg-blue-100 text-blue-700 border border-blue-400",
  }

  return (
    <div className={`${baseStyle} ${styles[type]}`}>
      {message}
    </div>
  )
}

export default Alert
