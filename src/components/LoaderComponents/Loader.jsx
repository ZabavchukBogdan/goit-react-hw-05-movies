import { Watch } from 'react-loader-spinner';

export function  Loader ()  {
  return (
    <div style={{ 'textAlign': 'center','marginLeft': 'auto', 'marginRight': 'auto'  }}>
      <Watch
      height="80"
      width="80"
      radius="40"
      color="#910f03"
      ariaLabel="watch-loading"
      visible={true}
      wrapperStyle={{}}
      />
    </div>
    
  );
};