// const WatchListPage = ({ watchlist }) => {
//   return (
//     <div id="watchlist">
//       <h1>WatchListPage</h1>
//       <table border={1}>
//         <tr>
//           <td>Id</td>
//           <td>Movie Title</td>
//         </tr>
//         {
//         Object.values(watchlist).map(movie => (
//           <tr>
//             <td>{movie.id}</td>
//             <td>{movie.title}</td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   )
// }
// export default WatchListPage;
const WatchListPage = ({ watchlist }) => {
  return (
    <div>
      <h1>WatchListPage</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Movie Title</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(watchlist).map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default WatchListPage;
