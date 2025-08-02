export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-gray-200 h-4 rounded">
      <div
        className="h-4 bg-blue-600 rounded"
        style={{ width: `${progress}%` }}
      ></div>
      <p className="text-sm mt-1">{progress}% completed</p>
    </div>
  );
}
