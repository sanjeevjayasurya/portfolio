export const Rating = ({ rating = 30 }) => {
  return (
    <div class="relative pt-1 mt-6">
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: `${rating}%` }}
          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600"
        ></div>
      </div>
    </div>
  );
};
