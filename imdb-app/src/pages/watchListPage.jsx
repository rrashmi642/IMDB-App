const WatchListPage = ({ watchlist }) => {
  console.log("nn", watchlist);
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
          {/* {Object.values(watchlist).map((movie) =>(
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
            </tr>
))} */}

{watchlist &&
            Object.values(watchlist).map((movie) => {
              return (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.title}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default WatchListPage;
