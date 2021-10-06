import PropTypes from 'prop-types';
import { Button, ListItem } from '@material-ui/core';
import { useRouter } from 'next/router';
const NavItem = ({
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const router = useRouter();

  const active = href ? href === router.asPath : false;

  const clickEvent = (e, link) => {
    console.log("router", link)
    router.push(link);
    e.preventDefault()
  }
  
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0
      }}
      {...rest}
    >
      <Button
        onClick={(e) => clickEvent(e, href)}
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'primary.main'
          }),
          '& svg': {
            mr: 1
          }
        }}
      >
        {Icon && (
          <Icon size="20" />
        )}
        <span>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
