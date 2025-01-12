export const StarSvg = ({ size = 30, color = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <path
        stroke={color}
        d="M23.855,8.951c-.387-1.185-1.441-1.951-2.688-1.951h-4.807l-1.668-5.037c-.383-1.193-1.44-1.963-2.693-1.963s-2.31,.771-2.691,1.959l-1.67,5.041H2.833c-1.246,0-2.302,.766-2.689,1.951-.387,1.184,.013,2.425,1.019,3.161l4.041,2.954-1.535,4.749c-.385,1.191,.022,2.433,1.038,3.164,.996,.719,2.333,.713,3.33-.016l3.963-2.914,3.963,2.914c.509,.373,1.093,.559,1.677,.559,.575,0,1.15-.181,1.653-.543,1.015-.73,1.422-1.973,1.037-3.164l-1.534-4.749,4.04-2.954c1.006-.735,1.405-1.975,1.019-3.161Zm-1.608,2.353l-4.332,3.167c-.175,.127-.247,.352-.181,.558l1.646,5.093c.248,.771-.015,1.573-.67,2.045-.656,.472-1.501,.467-2.154-.01l-4.259-3.131c-.177-.13-.416-.13-.593,0l-4.259,3.131c-.645,.471-1.509,.475-2.153,.011-.656-.473-.919-1.275-.671-2.045l1.646-5.093c.066-.206-.006-.43-.181-.558L1.754,11.304c-.65-.476-.909-1.278-.659-2.043,.25-.766,.933-1.261,1.739-1.261h5.167c.215,0,.407-.138,.475-.343l1.785-5.388c.248-.771,.931-1.269,1.741-1.269s1.494,.498,1.743,1.273l1.782,5.384c.067,.205,.259,.343,.475,.343h5.168c.805,0,1.486,.495,1.736,1.261s-.008,1.568-.657,2.042Z"
      />
    </svg>
  );
};