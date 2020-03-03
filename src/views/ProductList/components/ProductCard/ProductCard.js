import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 100,
    width: 100,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
         Nº: {product.numero}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
        Cor:  {product.cor}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
        Tipo:  {product.tipo}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
        CEP: {product.cep}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
         LatLong: {product.latitude}.{product.longitude}
        </Typography>

      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              Atualizado a 2hr
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <ListAltIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.totalDownloads} Vistoiras
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
