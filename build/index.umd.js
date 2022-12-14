(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('date-fns')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'date-fns'], factory) :
  (global = global || self, factory(global.ReactNiceDates = {}, global.React, global.PropTypes, global.DateFns));
}(this, (function (exports, React, propTypes, dateFns) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var classnames = createCommonjsModule(function (module) {
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames() {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				if (arg.length) {
  					var inner = classNames.apply(null, arg);
  					if (inner) {
  						classes.push(inner);
  					}
  				}
  			} else if (argType === 'object') {
  				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  					classes.push(arg.toString());
  					continue;
  				}

  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if ( module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  var defaultModifiersClassNames = {
    today: '-today',
    outside: '-outside',
    wide: '-wide',
    disabled: '-disabled',
    blocked: '-blocked',
    selected: '-selected',
    selectedStart: '-selected-start',
    selectedMiddle: '-selected-middle',
    selectedEnd: '-selected-end'
  };
  function CalendarDay(_ref) {
    var date = _ref.date,
      height = _ref.height,
      locale = _ref.locale,
      receivedModifiers = _ref.modifiers,
      receivedModifiersClassNames = _ref.modifiersClassNames,
      onClick = _ref.onClick,
      onHover = _ref.onHover;
    var dayOfMonth = dateFns.getDate(date);
    var dayClassNames = {};
    var modifiers = _objectSpread2({
      today: dateFns.isToday(date)
    }, receivedModifiers);
    var modifiersClassNames = _objectSpread2(_objectSpread2({}, defaultModifiersClassNames), receivedModifiersClassNames);
    Object.keys(modifiers).forEach(function (name) {
      dayClassNames[modifiersClassNames[name]] = modifiers[name];
    });
    var handleClick = function handleClick(event) {
      onClick(date);
      event.preventDefault();
    };
    var handleMouseEnter = function handleMouseEnter() {
      onHover(date);
    };
    var handleMouseLeave = function handleMouseLeave() {
      onHover(null);
    };
    return /*#__PURE__*/React__default.createElement("span", {
      className: classnames('nice-dates-day', dayClassNames),
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchEnd: handleClick,
      style: {
        height: height
      }
    }, dayOfMonth === 1 && /*#__PURE__*/React__default.createElement("span", {
      className: "nice-dates-day_month"
    }, dateFns.format(date, 'LLL', {
      locale: locale
    })), /*#__PURE__*/React__default.createElement("span", {
      className: "nice-dates-day_date"
    }, dayOfMonth));
  }
  CalendarDay.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
    height: propTypes.number.isRequired,
    locale: propTypes.object.isRequired,
    modifiers: propTypes.objectOf(propTypes.bool),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    onHover: propTypes.func,
    onClick: propTypes.func
  };
  CalendarDay.defaultProps = {
    modifiers: {},
    monthModifiers: {},
    onHover: function onHover() {},
    onClick: function onClick() {}
  };

  function CalendarNavigation(_ref) {
    var locale = _ref.locale,
      month = _ref.month,
      year = _ref.year,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      onMonthChange = _ref.onMonthChange,
      showPicker = _ref.showPicker,
      setTime = _ref.setTime,
      show = _ref.show;
    var handlePrevious = function handlePrevious(event) {
      onMonthChange(dateFns.startOfMonth(dateFns.subMonths(month, 1)));
      event.preventDefault();
    };
    var handleNext = function handleNext(event) {
      onMonthChange(dateFns.startOfMonth(dateFns.addMonths(month, 1)));
      event.preventDefault();
    };
    return /*#__PURE__*/React__default.createElement("div", {
      className: "nice-dates-navigation"
    }, /*#__PURE__*/React__default.createElement("a", {
      className: classnames("nice-dates-navigation_previous", {
        "-disabled": dateFns.isSameMonth(month, minimumDate) || !show
      }),
      onClick: handlePrevious,
      onTouchEnd: handlePrevious
    }), /*#__PURE__*/React__default.createElement("span", {
      className: "nice-dates-navigation_current",
      onClick: function onClick() {
        showPicker(false), setTime("month");
      }
    }, show && dateFns.format(month, "LLLL", {
      locale: locale
    })), /*#__PURE__*/React__default.createElement("span", {
      className: "nice-dates-navigation_current",
      onClick: function onClick() {
        showPicker(false), setTime("year");
      }
    }, show && year), /*#__PURE__*/React__default.createElement("a", {
      className: classnames("nice-dates-navigation_next", {
        "-disabled": dateFns.isSameMonth(month, maximumDate) || !show
      }),
      onClick: handleNext,
      onTouchEnd: handleNext
    }));
  }
  CalendarNavigation.propTypes = {
    locale: propTypes.object.isRequired,
    month: propTypes.instanceOf(Date).isRequired,
    year: propTypes.number.isRequired,
    showPicker: propTypes.func,
    setTime: propTypes.func,
    minimumDate: propTypes.instanceOf(Date),
    maximumDate: propTypes.instanceOf(Date),
    onMonthChange: propTypes.func.isRequired,
    onYearChange: propTypes.func.isRequired,
    showMonthPicker: propTypes.func,
    show: propTypes.bool
  };

  var START_DATE = 'startDate';
  var END_DATE = 'endDate';
  var ORIGIN_BOTTOM = 'bottom';
  var ORIGIN_TOP = 'top';

  var rowsBetweenDates = function rowsBetweenDates(startDate, endDate, locale) {
    return dateFns.differenceInCalendarWeeks(endDate, startDate, {
      locale: locale
    }) + 1;
  };
  var rowsInMonth = function rowsInMonth(date, locale) {
    return rowsBetweenDates(dateFns.startOfMonth(date), dateFns.endOfMonth(date), locale);
  };
  var getStartDate = function getStartDate(date, locale) {
    return dateFns.startOfWeek(dateFns.startOfMonth(date), {
      locale: locale
    });
  };
  var getEndDate = function getEndDate(date, locale) {
    return dateFns.endOfWeek(dateFns.addWeeks(dateFns.endOfMonth(date), 6 - rowsInMonth(date, locale)), {
      locale: locale
    });
  };
  var createInitialState = function createInitialState(currentMonth, locale) {
    return {
      startDate: getStartDate(currentMonth, locale),
      endDate: getEndDate(currentMonth, locale),
      cellHeight: 0,
      isWide: false,
      lastCurrentMonth: currentMonth,
      locale: locale,
      offset: 0,
      origin: ORIGIN_TOP,
      transition: false
    };
  };
  var reducer = function reducer(state, action) {
    switch (action.type) {
      case "setStartDate":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          startDate: action.value
        });
      case "setEndDate":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          endDate: action.value
        });
      case "setRange":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          startDate: action.startDate,
          endDate: action.endDate
        });
      case "setCellHeight":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          cellHeight: action.value
        });
      case "setIsWide":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isWide: action.value
        });
      case "reset":
        return _objectSpread2(_objectSpread2({}, createInitialState(action.currentMonth, state.locale)), {}, {
          cellHeight: state.cellHeight,
          isWide: state.isWide
        });
      case "transitionToCurrentMonth":
        {
          var currentMonth = action.currentMonth;
          var lastCurrentMonth = state.lastCurrentMonth,
            startDate = state.startDate,
            endDate = state.endDate,
            cellHeight = state.cellHeight;
          var newState = _objectSpread2(_objectSpread2({}, state), {}, {
            lastCurrentMonth: currentMonth,
            transition: true
          });
          if (dateFns.isAfter(currentMonth, lastCurrentMonth)) {
            var offset = -(rowsBetweenDates(startDate, currentMonth, state.locale) - 1) * cellHeight;
            return _objectSpread2(_objectSpread2({}, newState), {}, {
              endDate: getEndDate(currentMonth, state.locale),
              offset: offset,
              origin: ORIGIN_TOP
            });
          } else if (dateFns.isBefore(currentMonth, lastCurrentMonth)) {
            var gridHeight = cellHeight * 6;
            var _offset = rowsBetweenDates(currentMonth, endDate, state.locale) * cellHeight - gridHeight;
            return _objectSpread2(_objectSpread2({}, newState), {}, {
              startDate: getStartDate(currentMonth, state.locale),
              offset: _offset,
              origin: ORIGIN_BOTTOM
            });
          }
          return state;
        }
      default:
        throw new Error("Unknown ".concat(action.type, " action type"));
    }
  };
  function useGrid(_ref) {
    var locale = _ref.locale,
      currentMonth = _ref.month,
      currentYear = _ref.year,
      onMonthChange = _ref.onMonthChange,
      onYearChange = _ref.onYearChange,
      transitionDuration = _ref.transitionDuration,
      touchDragEnabled = _ref.touchDragEnabled;
    var timeoutRef = React.useRef();
    var containerElementRef = React.useRef();
    var initialDragPositionRef = React.useRef(0);
    var _useReducer = React.useReducer(reducer, createInitialState(currentMonth, locale)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];
    var startDate = state.startDate,
      endDate = state.endDate,
      cellHeight = state.cellHeight,
      lastCurrentMonth = state.lastCurrentMonth,
      offset = state.offset,
      origin = state.origin,
      transition = state.transition,
      isWide = state.isWide;
    React.useLayoutEffect(function () {
      var notDragging = !initialDragPositionRef.current;
      if (!dateFns.isSameMonth(lastCurrentMonth, currentMonth) && notDragging) {
        var containerElement = containerElementRef.current;
        containerElement.classList.add("-transition");
        clearTimeout(timeoutRef.current);
        if (Math.abs(dateFns.differenceInCalendarMonths(currentMonth, lastCurrentMonth)) <= 12) {
          dispatch({
            type: "transitionToCurrentMonth",
            currentMonth: currentMonth
          });
          timeoutRef.current = setTimeout(function () {
            dispatch({
              type: "reset",
              currentMonth: currentMonth
            });
          }, transitionDuration);
        } else {
          dispatch({
            type: "reset",
            currentMonth: currentMonth
          });
        }
      }
    }, [currentMonth]); // eslint-disable-line react-hooks/exhaustive-deps

    React.useLayoutEffect(function () {
      if (!touchDragEnabled) {
        return;
      }
      var containerElement = containerElementRef.current;
      var gridHeight = cellHeight * 6;
      var halfGridHeight = gridHeight / 2;
      if (containerElement) {
        var handleDragStart = function handleDragStart(event) {
          clearTimeout(timeoutRef.current);
          var computedOffset = Number(window.getComputedStyle(containerElement).transform.match(/([-+]?[\d.]+)/g)[5]);
          var currentMonthPosition = 0;
          if (!initialDragPositionRef.current) {
            var newStartDate = getStartDate(dateFns.subMonths(currentMonth, 1), locale);
            currentMonthPosition = (rowsBetweenDates(newStartDate, currentMonth, locale) - 1) * cellHeight;
            dispatch({
              type: "setRange",
              startDate: newStartDate,
              endDate: getEndDate(dateFns.addMonths(currentMonth, 1), locale)
            });
          }
          containerElement.style.transform = "translate3d(0, ".concat(computedOffset || -currentMonthPosition, "px, 0)");
          containerElement.classList.remove("-transition");
          containerElement.classList.add("-moving");
          initialDragPositionRef.current = event.touches[0].clientY + (-computedOffset || currentMonthPosition);
        };
        var handleDrag = function handleDrag(event) {
          var initialDragPosition = initialDragPositionRef.current;
          var dragOffset = event.touches[0].clientY - initialDragPosition;
          var previousMonth = dateFns.subMonths(currentMonth, 1);
          var previousMonthPosition = (rowsBetweenDates(startDate, previousMonth, locale) - 1) * cellHeight;
          var currentMonthPosition = (rowsBetweenDates(startDate, currentMonth, locale) - 1) * cellHeight;
          var nextMonth = dateFns.addMonths(currentMonth, 1);
          var nextMonthPosition = (rowsBetweenDates(startDate, nextMonth, locale) - 1) * cellHeight;
          if (dragOffset < 0) {
            if (Math.abs(dragOffset) > currentMonthPosition && dateFns.isBefore(endDate, dateFns.addMonths(currentMonth, 2))) {
              dispatch({
                type: "setEndDate",
                value: getEndDate(nextMonth, locale)
              });
            }
          } else if (dragOffset > 0) {
            var newStartDate = getStartDate(previousMonth, locale);
            var newCurrentMonthPosition = (rowsBetweenDates(newStartDate, currentMonth, locale) - 1) * cellHeight;
            initialDragPositionRef.current += newCurrentMonthPosition;
            dispatch({
              type: "setStartDate",
              value: newStartDate
            });
          }
          var shouldChangeToNextMonth = Math.abs(dragOffset) > nextMonthPosition - halfGridHeight;
          var shouldChangeToPreviousMonth = Math.abs(dragOffset) > previousMonthPosition - halfGridHeight && Math.abs(dragOffset) < currentMonthPosition - halfGridHeight;
          if (shouldChangeToNextMonth) {
            onMonthChange(nextMonth);
          } else if (shouldChangeToPreviousMonth) {
            onMonthChange(previousMonth);
          }
          containerElement.style.transform = "translate3d(0, ".concat(dragOffset, "px, 0)");
          event.preventDefault();
        };
        var handleDragEnd = function handleDragEnd(event) {
          var currentMonthPosition = (rowsBetweenDates(startDate, currentMonth, locale) - 1) * cellHeight;
          containerElement.style.transform = "translate3d(0, ".concat(-currentMonthPosition, "px, 0)");
          containerElement.classList.add("-transition");
          containerElement.classList.remove("-moving");
          timeoutRef.current = setTimeout(function () {
            initialDragPositionRef.current = 0;
            containerElement.style.transform = "translate3d(0, 0, 0)";
            containerElement.classList.remove("-transition");
            dispatch({
              type: "reset",
              currentMonth: currentMonth
            });
          }, transitionDuration);
          if (Math.abs(initialDragPositionRef.current - currentMonthPosition - event.changedTouches[0].clientY) > 10) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
        containerElement.addEventListener("touchstart", handleDragStart);
        containerElement.addEventListener("touchmove", handleDrag);
        containerElement.addEventListener("touchend", handleDragEnd);
        return function () {
          containerElement.removeEventListener("touchstart", handleDragStart);
          containerElement.removeEventListener("touchmove", handleDrag);
          containerElement.removeEventListener("touchend", handleDragEnd);
        };
      }
    });
    React.useEffect(function () {
      var handleResize = function handleResize() {
        var containerElement = containerElementRef.current;
        var containerWidth = containerElement.offsetWidth;
        var cellWidth = containerWidth / 7;
        var newCellHeight = 1;
        var wide = false;
        if (cellWidth > 60) {
          newCellHeight += Math.round(cellWidth * 0.75);
          wide = true;
        } else {
          newCellHeight += Math.round(cellWidth);
        }
        dispatch({
          type: "setIsWide",
          value: wide
        });
        dispatch({
          type: "setCellHeight",
          value: newCellHeight
        });
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return function () {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return {
      startDate: startDate,
      endDate: endDate,
      cellHeight: cellHeight,
      containerElementRef: containerElementRef,
      offset: offset,
      origin: origin,
      transition: transition,
      isWide: isWide
    };
  }

  var computeModifiers = function computeModifiers(modifiers, date) {
    var computedModifiers = {};
    Object.keys(modifiers).map(function (key) {
      computedModifiers[key] = modifiers[key](date);
    });
    return computedModifiers;
  };
  function CalendarGrid(_ref) {
    var locale = _ref.locale,
      month = _ref.month,
      year = _ref.year,
      onYearChange = _ref.onYearChange,
      modifiers = _ref.modifiers,
      modifiersClassNames = _ref.modifiersClassNames,
      onMonthChange = _ref.onMonthChange,
      onDayHover = _ref.onDayHover,
      onDayClick = _ref.onDayClick,
      transitionDuration = _ref.transitionDuration,
      touchDragEnabled = _ref.touchDragEnabled;
    var grid = useGrid({
      locale: locale,
      month: dateFns.startOfMonth(month),
      year: year,
      onYearChange: onYearChange,
      onMonthChange: onMonthChange,
      transitionDuration: transitionDuration,
      touchDragEnabled: touchDragEnabled
    });
    var startDate = grid.startDate,
      endDate = grid.endDate,
      cellHeight = grid.cellHeight,
      containerElementRef = grid.containerElementRef,
      isWide = grid.isWide,
      offset = grid.offset,
      origin = grid.origin,
      transition = grid.transition;
    var days = dateFns.eachDayOfInterval({
      start: startDate,
      end: endDate
    }).map(function (date) {
      return /*#__PURE__*/React__default.createElement(CalendarDay, {
        date: date,
        height: cellHeight,
        key: dateFns.lightFormat(date, 'yyyy-MM-dd'),
        locale: locale,
        modifiers: _objectSpread2(_objectSpread2({}, computeModifiers(modifiers, date)), {}, {
          outside: !dateFns.isSameMonth(date, month),
          wide: isWide
        }),
        modifiersClassNames: modifiersClassNames,
        onHover: onDayHover,
        onClick: onDayClick
      });
    });

    // console.log(year)

    return /*#__PURE__*/React__default.createElement("div", {
      className: "nice-dates-grid",
      style: {
        height: cellHeight * 6
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: classnames('nice-dates-grid_container', {
        '-moving': offset,
        '-origin-bottom': origin === ORIGIN_BOTTOM,
        '-origin-top': origin === ORIGIN_TOP,
        '-transition': transition
      }),
      ref: containerElementRef,
      style: {
        transform: "translate3d(0, ".concat(offset, "px, 0)"),
        transitionDuration: "".concat(transitionDuration, "ms")
      }
    }, days));
  }
  CalendarGrid.propTypes = {
    locale: propTypes.object.isRequired,
    month: propTypes.instanceOf(Date).isRequired,
    year: propTypes.number.isRequired,
    onYearChange: propTypes.func,
    modifiers: propTypes.objectOf(propTypes.func),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    onMonthChange: propTypes.func.isRequired,
    onDayHover: propTypes.func,
    onDayClick: propTypes.func,
    transitionDuration: propTypes.number.isRequired,
    touchDragEnabled: propTypes.bool
  };
  CalendarGrid.defaultProps = {
    modifiers: {},
    transitionDuration: 500,
    touchDragEnabled: true
  };

  function CalendarWeekHeader(_ref) {
    var locale = _ref.locale,
      weekdayFormat = _ref.weekdayFormat;
    var today = new Date();
    var weekDays = dateFns.eachDayOfInterval({
      start: dateFns.startOfWeek(today, {
        locale: locale
      }),
      end: dateFns.endOfWeek(today, {
        locale: locale
      })
    }).map(function (date) {
      return dateFns.format(date, weekdayFormat, {
        locale: locale
      });
    });
    return /*#__PURE__*/React__default.createElement("div", {
      className: "nice-dates-week-header"
    }, weekDays.map(function (day) {
      return /*#__PURE__*/React__default.createElement("span", {
        key: day,
        className: "nice-dates-week-header_day"
      }, day);
    }));
  }
  CalendarWeekHeader.propTypes = {
    locale: propTypes.object.isRequired,
    weekdayFormat: propTypes.string
  };
  CalendarWeekHeader.defaultProps = {
    weekdayFormat: 'eee'
  };

  var isSelectable = function isSelectable(date, _ref) {
    var minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate;
    return !dateFns.isBefore(date, dateFns.startOfDay(minimumDate)) && !dateFns.isAfter(date, maximumDate);
  };
  var mergeModifiers = function mergeModifiers(baseModifiers, newModifiers) {
    var modifiers = _objectSpread2({}, baseModifiers);
    if (!newModifiers) {
      return baseModifiers;
    }
    Object.keys(newModifiers).forEach(function (name) {
      modifiers[name] = baseModifiers[name] ? function (date) {
        return baseModifiers[name](date) || newModifiers[name](date);
      } : newModifiers[name];
    });
    return modifiers;
  };
  var setTime = function setTime(date, dateWithTime) {
    return dateFns.set(date, {
      hours: dateWithTime.getHours(),
      minutes: dateWithTime.getMinutes(),
      seconds: dateWithTime.getSeconds()
    });
  };
  var isRangeLengthValid = function isRangeLengthValid(_ref2, _ref3) {
    var startDate = _ref2.startDate,
      endDate = _ref2.endDate;
    var minimumLength = _ref3.minimumLength,
      maximumLength = _ref3.maximumLength;
    return dateFns.differenceInDays(dateFns.startOfDay(endDate), dateFns.startOfDay(startDate)) >= minimumLength && (!maximumLength || dateFns.differenceInDays(dateFns.startOfDay(endDate), dateFns.startOfDay(startDate)) <= maximumLength);
  };

  function useControllableState(value, onChange, intitialValue) {
    var _useState = React.useState(intitialValue),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
    return onChange ? [value, onChange] : [state, setState];
  }

  var Popover = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
    var children = _ref.children,
      open = _ref.open;
    return /*#__PURE__*/React__default.createElement("div", {
      className: classnames('nice-dates-popover', {
        '-open': open
      }),
      ref: ref
    }, children);
  });
  Popover.displayName = 'Popover';
  Popover.propTypes = {
    children: propTypes.node,
    open: propTypes.bool
  };

  var defaultModifiersClassNames$1 = {
    today: '-today',
    outside: '-outside',
    wide: '-wide',
    disabled: '-disabled',
    selected: '-selected',
    selectedStart: '-selected-start',
    selectedMiddle: '-selected-middle',
    selectedEnd: '-selected-end'
  };
  var isSameMonth = function isSameMonth(date, actualDate) {
    return dateFns.getMonth(date) === dateFns.getMonth(actualDate) && dateFns.getYear(date) === dateFns.getYear(actualDate);
  };
  function CalendarMonth(_ref) {
    var date = _ref.date,
      height = _ref.height,
      locale = _ref.locale,
      receivedModifiers = _ref.modifiers,
      receivedModifiersClassNames = _ref.modifiersClassNames,
      onClick = _ref.onClick,
      onHover = _ref.onHover,
      showGrid = _ref.showGrid,
      actualDate = _ref.actualDate;
    var monthClassNames = {};
    var modifiers = _objectSpread2({
      today: isSameMonth(date, actualDate)
    }, receivedModifiers);
    var modifiersClassNames = _objectSpread2(_objectSpread2({}, defaultModifiersClassNames$1), receivedModifiersClassNames);
    Object.keys(modifiers).forEach(function (name) {
      monthClassNames[modifiersClassNames[name]] = modifiers[name];
    });
    var handleClick = function handleClick(event) {
      onClick(date);
      showGrid();
      event.preventDefault();
    };
    var handleMouseEnter = function handleMouseEnter() {
      onHover(date);
    };
    var handleMouseLeave = function handleMouseLeave() {
      onHover(null);
    };
    return /*#__PURE__*/React__default.createElement("span", {
      className: classnames('nice-dates-month', monthClassNames),
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchEnd: handleClick,
      style: {
        height: height
      }
    }, /*#__PURE__*/React__default.createElement("span", null, dateFns.format(date, 'LLLL', {
      locale: locale
    })));
  }
  CalendarMonth.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
    height: propTypes.number.isRequired,
    locale: propTypes.object.isRequired,
    modifiers: propTypes.objectOf(propTypes.bool),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    onHover: propTypes.func,
    onClick: propTypes.func,
    showGrid: propTypes.func,
    actualDate: propTypes.instanceOf(Date)
  };
  CalendarMonth.defaultProps = {
    modifiers: {},
    onHover: function onHover() {},
    onClick: function onClick() {}
  };

  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
  }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @param {Date|Number} argument - the value to convert
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */

  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date

    if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument);
    } else {
      if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

        console.warn(new Error().stack);
      }

      return new Date(NaN);
    }
  }

  /**
   * @name getMonth
   * @category Month Helpers
   * @summary Get the month of the given date.
   *
   * @description
   * Get the month of the given date.
   *
   * @param {Date|Number} date - the given date
   * @returns {Number} the month
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Which month is 29 February 2012?
   * const result = getMonth(new Date(2012, 1, 29))
   * //=> 1
   */

  function getMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var month = date.getMonth();
    return month;
  }

  var computeModifiers$1 = function computeModifiers(modifiers, date) {
    var computedModifiers = {};
    Object.keys(modifiers).map(function (key) {
      computedModifiers[key] = modifiers[key](date);
    });
    return computedModifiers;
  };
  function MonthPicker(_ref) {
    var locale = _ref.locale,
      modifiers = _ref.modifiers,
      actualDate = _ref.actualDate,
      modifiersClassNames = _ref.modifiersClassNames,
      onDayHover = _ref.onDayHover,
      onClick = _ref.onClick,
      transitionDuration = _ref.transitionDuration,
      touchDragEnabled = _ref.touchDragEnabled,
      showGrid = _ref.showGrid;
    var grid = useGrid({
      locale: locale,
      month: getMonth(actualDate),
      onMonthChange: onClick,
      transitionDuration: transitionDuration,
      touchDragEnabled: touchDragEnabled
    });
    var cellHeight = grid.cellHeight,
      offset = grid.offset,
      containerElementRef = grid.containerElementRef,
      isWide = grid.isWide,
      origin = grid.origin,
      transition = grid.transition;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      months = _useState2[0],
      setMonths = _useState2[1];
    React.useEffect(function () {
      var allMonths = dateFns.eachMonthOfInterval({
        start: new Date(dateFns.getYear(actualDate), 0, 1),
        end: new Date(dateFns.getYear(actualDate), 11, 1)
      }).map(function (date) {
        return /*#__PURE__*/React__default.createElement(CalendarMonth, {
          date: date,
          actualDate: actualDate,
          height: cellHeight,
          key: dateFns.lightFormat(date, 'yyyy-MM-dd'),
          locale: locale,
          modifiers: _objectSpread2(_objectSpread2({}, computeModifiers$1(modifiers, date)), {}, {
            wide: isWide
          }),
          modifiersClassNames: modifiersClassNames,
          onHover: onDayHover,
          onClick: onClick,
          showGrid: showGrid
        });
      });
      setMonths(allMonths);
    }, [actualDate, cellHeight, locale, modifiers, modifiersClassNames, onClick, onDayHover, showGrid, isWide]);
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "nice-dates-grid",
      style: {
        height: cellHeight * 6
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: classnames('nice-dates-grid_container', {
        '-moving': offset,
        '-origin-bottom': origin === ORIGIN_BOTTOM,
        '-origin-top': origin === ORIGIN_TOP,
        '-transition': transition
      }),
      ref: containerElementRef,
      style: {
        transform: "translate3d(0, ".concat(offset, "px, 0)"),
        transitionDuration: "".concat(transitionDuration, "ms")
      }
    }, months)));
  }
  MonthPicker.propTypes = {
    locale: propTypes.object.isRequired,
    actualDate: propTypes.instanceOf(Date).isRequired,
    modifiers: propTypes.objectOf(propTypes.func),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    onDayHover: propTypes.func,
    transitionDuration: propTypes.number.isRequired,
    touchDragEnabled: propTypes.bool,
    onClick: propTypes.func,
    showGrid: propTypes.func
  };
  MonthPicker.defaultProps = {
    modifiers: {},
    transitionDuration: 800,
    touchDragEnabled: true
  };

  var moment = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
       module.exports = factory() ;
  }(commonjsGlobal, (function () {
      var hookCallback;

      function hooks() {
          return hookCallback.apply(null, arguments);
      }

      // This is done to register the method called with moment()
      // without creating circular dependencies.
      function setHookCallback(callback) {
          hookCallback = callback;
      }

      function isArray(input) {
          return (
              input instanceof Array ||
              Object.prototype.toString.call(input) === '[object Array]'
          );
      }

      function isObject(input) {
          // IE8 will treat undefined and null as object if it wasn't for
          // input != null
          return (
              input != null &&
              Object.prototype.toString.call(input) === '[object Object]'
          );
      }

      function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
      }

      function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
              return Object.getOwnPropertyNames(obj).length === 0;
          } else {
              var k;
              for (k in obj) {
                  if (hasOwnProp(obj, k)) {
                      return false;
                  }
              }
              return true;
          }
      }

      function isUndefined(input) {
          return input === void 0;
      }

      function isNumber(input) {
          return (
              typeof input === 'number' ||
              Object.prototype.toString.call(input) === '[object Number]'
          );
      }

      function isDate(input) {
          return (
              input instanceof Date ||
              Object.prototype.toString.call(input) === '[object Date]'
          );
      }

      function map(arr, fn) {
          var res = [],
              i,
              arrLen = arr.length;
          for (i = 0; i < arrLen; ++i) {
              res.push(fn(arr[i], i));
          }
          return res;
      }

      function extend(a, b) {
          for (var i in b) {
              if (hasOwnProp(b, i)) {
                  a[i] = b[i];
              }
          }

          if (hasOwnProp(b, 'toString')) {
              a.toString = b.toString;
          }

          if (hasOwnProp(b, 'valueOf')) {
              a.valueOf = b.valueOf;
          }

          return a;
      }

      function createUTC(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, true).utc();
      }

      function defaultParsingFlags() {
          // We need to deep clone this object.
          return {
              empty: false,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: false,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: false,
              userInvalidated: false,
              iso: false,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: false,
              weekdayMismatch: false,
          };
      }

      function getParsingFlags(m) {
          if (m._pf == null) {
              m._pf = defaultParsingFlags();
          }
          return m._pf;
      }

      var some;
      if (Array.prototype.some) {
          some = Array.prototype.some;
      } else {
          some = function (fun) {
              var t = Object(this),
                  len = t.length >>> 0,
                  i;

              for (i = 0; i < len; i++) {
                  if (i in t && fun.call(this, t[i], i, t)) {
                      return true;
                  }
              }

              return false;
          };
      }

      function isValid(m) {
          if (m._isValid == null) {
              var flags = getParsingFlags(m),
                  parsedParts = some.call(flags.parsedDateParts, function (i) {
                      return i != null;
                  }),
                  isNowValid =
                      !isNaN(m._d.getTime()) &&
                      flags.overflow < 0 &&
                      !flags.empty &&
                      !flags.invalidEra &&
                      !flags.invalidMonth &&
                      !flags.invalidWeekday &&
                      !flags.weekdayMismatch &&
                      !flags.nullInput &&
                      !flags.invalidFormat &&
                      !flags.userInvalidated &&
                      (!flags.meridiem || (flags.meridiem && parsedParts));

              if (m._strict) {
                  isNowValid =
                      isNowValid &&
                      flags.charsLeftOver === 0 &&
                      flags.unusedTokens.length === 0 &&
                      flags.bigHour === undefined;
              }

              if (Object.isFrozen == null || !Object.isFrozen(m)) {
                  m._isValid = isNowValid;
              } else {
                  return isNowValid;
              }
          }
          return m._isValid;
      }

      function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
              extend(getParsingFlags(m), flags);
          } else {
              getParsingFlags(m).userInvalidated = true;
          }

          return m;
      }

      // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.
      var momentProperties = (hooks.momentProperties = []),
          updateInProgress = false;

      function copyConfig(to, from) {
          var i,
              prop,
              val,
              momentPropertiesLen = momentProperties.length;

          if (!isUndefined(from._isAMomentObject)) {
              to._isAMomentObject = from._isAMomentObject;
          }
          if (!isUndefined(from._i)) {
              to._i = from._i;
          }
          if (!isUndefined(from._f)) {
              to._f = from._f;
          }
          if (!isUndefined(from._l)) {
              to._l = from._l;
          }
          if (!isUndefined(from._strict)) {
              to._strict = from._strict;
          }
          if (!isUndefined(from._tzm)) {
              to._tzm = from._tzm;
          }
          if (!isUndefined(from._isUTC)) {
              to._isUTC = from._isUTC;
          }
          if (!isUndefined(from._offset)) {
              to._offset = from._offset;
          }
          if (!isUndefined(from._pf)) {
              to._pf = getParsingFlags(from);
          }
          if (!isUndefined(from._locale)) {
              to._locale = from._locale;
          }

          if (momentPropertiesLen > 0) {
              for (i = 0; i < momentPropertiesLen; i++) {
                  prop = momentProperties[i];
                  val = from[prop];
                  if (!isUndefined(val)) {
                      to[prop] = val;
                  }
              }
          }

          return to;
      }

      // Moment prototype object
      function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
              this._d = new Date(NaN);
          }
          // Prevent infinite loop in case updateOffset creates new moment
          // objects.
          if (updateInProgress === false) {
              updateInProgress = true;
              hooks.updateOffset(this);
              updateInProgress = false;
          }
      }

      function isMoment(obj) {
          return (
              obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
          );
      }

      function warn(msg) {
          if (
              hooks.suppressDeprecationWarnings === false &&
              typeof console !== 'undefined' &&
              console.warn
          ) {
              console.warn('Deprecation warning: ' + msg);
          }
      }

      function deprecate(msg, fn) {
          var firstTime = true;

          return extend(function () {
              if (hooks.deprecationHandler != null) {
                  hooks.deprecationHandler(null, msg);
              }
              if (firstTime) {
                  var args = [],
                      arg,
                      i,
                      key,
                      argLen = arguments.length;
                  for (i = 0; i < argLen; i++) {
                      arg = '';
                      if (typeof arguments[i] === 'object') {
                          arg += '\n[' + i + '] ';
                          for (key in arguments[0]) {
                              if (hasOwnProp(arguments[0], key)) {
                                  arg += key + ': ' + arguments[0][key] + ', ';
                              }
                          }
                          arg = arg.slice(0, -2); // Remove trailing comma and space
                      } else {
                          arg = arguments[i];
                      }
                      args.push(arg);
                  }
                  warn(
                      msg +
                          '\nArguments: ' +
                          Array.prototype.slice.call(args).join('') +
                          '\n' +
                          new Error().stack
                  );
                  firstTime = false;
              }
              return fn.apply(this, arguments);
          }, fn);
      }

      var deprecations = {};

      function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
              warn(msg);
              deprecations[name] = true;
          }
      }

      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;

      function isFunction(input) {
          return (
              (typeof Function !== 'undefined' && input instanceof Function) ||
              Object.prototype.toString.call(input) === '[object Function]'
          );
      }

      function set(config) {
          var prop, i;
          for (i in config) {
              if (hasOwnProp(config, i)) {
                  prop = config[i];
                  if (isFunction(prop)) {
                      this[i] = prop;
                  } else {
                      this['_' + i] = prop;
                  }
              }
          }
          this._config = config;
          // Lenient ordinal parsing accepts just a number in addition to
          // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
          // TODO: Remove "ordinalParse" fallback in next major release.
          this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                  '|' +
                  /\d{1,2}/.source
          );
      }

      function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig),
              prop;
          for (prop in childConfig) {
              if (hasOwnProp(childConfig, prop)) {
                  if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                      res[prop] = {};
                      extend(res[prop], parentConfig[prop]);
                      extend(res[prop], childConfig[prop]);
                  } else if (childConfig[prop] != null) {
                      res[prop] = childConfig[prop];
                  } else {
                      delete res[prop];
                  }
              }
          }
          for (prop in parentConfig) {
              if (
                  hasOwnProp(parentConfig, prop) &&
                  !hasOwnProp(childConfig, prop) &&
                  isObject(parentConfig[prop])
              ) {
                  // make sure changes to properties don't modify parent config
                  res[prop] = extend({}, res[prop]);
              }
          }
          return res;
      }

      function Locale(config) {
          if (config != null) {
              this.set(config);
          }
      }

      var keys;

      if (Object.keys) {
          keys = Object.keys;
      } else {
          keys = function (obj) {
              var i,
                  res = [];
              for (i in obj) {
                  if (hasOwnProp(obj, i)) {
                      res.push(i);
                  }
              }
              return res;
          };
      }

      var defaultCalendar = {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
      };

      function calendar(key, mom, now) {
          var output = this._calendar[key] || this._calendar['sameElse'];
          return isFunction(output) ? output.call(mom, now) : output;
      }

      function zeroFill(number, targetLength, forceSign) {
          var absNumber = '' + Math.abs(number),
              zerosToFill = targetLength - absNumber.length,
              sign = number >= 0;
          return (
              (sign ? (forceSign ? '+' : '') : '-') +
              Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
              absNumber
          );
      }

      var formattingTokens =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          formatFunctions = {},
          formatTokenFunctions = {};

      // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }
      function addFormatToken(token, padded, ordinal, callback) {
          var func = callback;
          if (typeof callback === 'string') {
              func = function () {
                  return this[callback]();
              };
          }
          if (token) {
              formatTokenFunctions[token] = func;
          }
          if (padded) {
              formatTokenFunctions[padded[0]] = function () {
                  return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
              };
          }
          if (ordinal) {
              formatTokenFunctions[ordinal] = function () {
                  return this.localeData().ordinal(
                      func.apply(this, arguments),
                      token
                  );
              };
          }
      }

      function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
              return input.replace(/^\[|\]$/g, '');
          }
          return input.replace(/\\/g, '');
      }

      function makeFormatFunction(format) {
          var array = format.match(formattingTokens),
              i,
              length;

          for (i = 0, length = array.length; i < length; i++) {
              if (formatTokenFunctions[array[i]]) {
                  array[i] = formatTokenFunctions[array[i]];
              } else {
                  array[i] = removeFormattingTokens(array[i]);
              }
          }

          return function (mom) {
              var output = '',
                  i;
              for (i = 0; i < length; i++) {
                  output += isFunction(array[i])
                      ? array[i].call(mom, format)
                      : array[i];
              }
              return output;
          };
      }

      // format date using native date object
      function formatMoment(m, format) {
          if (!m.isValid()) {
              return m.localeData().invalidDate();
          }

          format = expandFormat(format, m.localeData());
          formatFunctions[format] =
              formatFunctions[format] || makeFormatFunction(format);

          return formatFunctions[format](m);
      }

      function expandFormat(format, locale) {
          var i = 5;

          function replaceLongDateFormatTokens(input) {
              return locale.longDateFormat(input) || input;
          }

          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format)) {
              format = format.replace(
                  localFormattingTokens,
                  replaceLongDateFormatTokens
              );
              localFormattingTokens.lastIndex = 0;
              i -= 1;
          }

          return format;
      }

      var defaultLongDateFormat = {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A',
      };

      function longDateFormat(key) {
          var format = this._longDateFormat[key],
              formatUpper = this._longDateFormat[key.toUpperCase()];

          if (format || !formatUpper) {
              return format;
          }

          this._longDateFormat[key] = formatUpper
              .match(formattingTokens)
              .map(function (tok) {
                  if (
                      tok === 'MMMM' ||
                      tok === 'MM' ||
                      tok === 'DD' ||
                      tok === 'dddd'
                  ) {
                      return tok.slice(1);
                  }
                  return tok;
              })
              .join('');

          return this._longDateFormat[key];
      }

      var defaultInvalidDate = 'Invalid date';

      function invalidDate() {
          return this._invalidDate;
      }

      var defaultOrdinal = '%d',
          defaultDayOfMonthOrdinalParse = /\d{1,2}/;

      function ordinal(number) {
          return this._ordinal.replace('%d', number);
      }

      var defaultRelativeTime = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          w: 'a week',
          ww: '%d weeks',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
      };

      function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output)
              ? output(number, withoutSuffix, string, isFuture)
              : output.replace(/%d/i, number);
      }

      function pastFuture(diff, output) {
          var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
          return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }

      var aliases = {};

      function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
      }

      function normalizeUnits(units) {
          return typeof units === 'string'
              ? aliases[units] || aliases[units.toLowerCase()]
              : undefined;
      }

      function normalizeObjectUnits(inputObject) {
          var normalizedInput = {},
              normalizedProp,
              prop;

          for (prop in inputObject) {
              if (hasOwnProp(inputObject, prop)) {
                  normalizedProp = normalizeUnits(prop);
                  if (normalizedProp) {
                      normalizedInput[normalizedProp] = inputObject[prop];
                  }
              }
          }

          return normalizedInput;
      }

      var priorities = {};

      function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
      }

      function getPrioritizedUnits(unitsObj) {
          var units = [],
              u;
          for (u in unitsObj) {
              if (hasOwnProp(unitsObj, u)) {
                  units.push({ unit: u, priority: priorities[u] });
              }
          }
          units.sort(function (a, b) {
              return a.priority - b.priority;
          });
          return units;
      }

      function isLeapYear(year) {
          return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      }

      function absFloor(number) {
          if (number < 0) {
              // -0 -> 0
              return Math.ceil(number) || 0;
          } else {
              return Math.floor(number);
          }
      }

      function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion,
              value = 0;

          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
              value = absFloor(coercedNumber);
          }

          return value;
      }

      function makeGetSet(unit, keepTime) {
          return function (value) {
              if (value != null) {
                  set$1(this, unit, value);
                  hooks.updateOffset(this, keepTime);
                  return this;
              } else {
                  return get(this, unit);
              }
          };
      }

      function get(mom, unit) {
          return mom.isValid()
              ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
              : NaN;
      }

      function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
              if (
                  unit === 'FullYear' &&
                  isLeapYear(mom.year()) &&
                  mom.month() === 1 &&
                  mom.date() === 29
              ) {
                  value = toInt(value);
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                      value,
                      mom.month(),
                      daysInMonth(value, mom.month())
                  );
              } else {
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
              }
          }
      }

      // MOMENTS

      function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
              return this[units]();
          }
          return this;
      }

      function stringSet(units, value) {
          if (typeof units === 'object') {
              units = normalizeObjectUnits(units);
              var prioritized = getPrioritizedUnits(units),
                  i,
                  prioritizedLen = prioritized.length;
              for (i = 0; i < prioritizedLen; i++) {
                  this[prioritized[i].unit](units[prioritized[i].unit]);
              }
          } else {
              units = normalizeUnits(units);
              if (isFunction(this[units])) {
                  return this[units](value);
              }
          }
          return this;
      }

      var match1 = /\d/, //       0 - 9
          match2 = /\d\d/, //      00 - 99
          match3 = /\d{3}/, //     000 - 999
          match4 = /\d{4}/, //    0000 - 9999
          match6 = /[+-]?\d{6}/, // -999999 - 999999
          match1to2 = /\d\d?/, //       0 - 99
          match3to4 = /\d\d\d\d?/, //     999 - 9999
          match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
          match1to3 = /\d{1,3}/, //       0 - 999
          match1to4 = /\d{1,4}/, //       0 - 9999
          match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
          matchUnsigned = /\d+/, //       0 - inf
          matchSigned = /[+-]?\d+/, //    -inf - inf
          matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
          matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
          matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
          // any word (or two) characters or numbers including two/three word month in arabic.
          // includes scottish gaelic two word and hyphenated months
          matchWord =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          regexes;

      regexes = {};

      function addRegexToken(token, regex, strictRegex) {
          regexes[token] = isFunction(regex)
              ? regex
              : function (isStrict, localeData) {
                    return isStrict && strictRegex ? strictRegex : regex;
                };
      }

      function getParseRegexForToken(token, config) {
          if (!hasOwnProp(regexes, token)) {
              return new RegExp(unescapeFormat(token));
          }

          return regexes[token](config._strict, config._locale);
      }

      // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
      function unescapeFormat(s) {
          return regexEscape(
              s
                  .replace('\\', '')
                  .replace(
                      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                      function (matched, p1, p2, p3, p4) {
                          return p1 || p2 || p3 || p4;
                      }
                  )
          );
      }

      function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      var tokens = {};

      function addParseToken(token, callback) {
          var i,
              func = callback,
              tokenLen;
          if (typeof token === 'string') {
              token = [token];
          }
          if (isNumber(callback)) {
              func = function (input, array) {
                  array[callback] = toInt(input);
              };
          }
          tokenLen = token.length;
          for (i = 0; i < tokenLen; i++) {
              tokens[token[i]] = func;
          }
      }

      function addWeekParseToken(token, callback) {
          addParseToken(token, function (input, array, config, token) {
              config._w = config._w || {};
              callback(input, config._w, config, token);
          });
      }

      function addTimeToArrayFromToken(token, input, config) {
          if (input != null && hasOwnProp(tokens, token)) {
              tokens[token](input, config._a, config, token);
          }
      }

      var YEAR = 0,
          MONTH = 1,
          DATE = 2,
          HOUR = 3,
          MINUTE = 4,
          SECOND = 5,
          MILLISECOND = 6,
          WEEK = 7,
          WEEKDAY = 8;

      function mod(n, x) {
          return ((n % x) + x) % x;
      }

      var indexOf;

      if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
      } else {
          indexOf = function (o) {
              // I know
              var i;
              for (i = 0; i < this.length; ++i) {
                  if (this[i] === o) {
                      return i;
                  }
              }
              return -1;
          };
      }

      function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
              return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1
              ? isLeapYear(year)
                  ? 29
                  : 28
              : 31 - ((modMonth % 7) % 2);
      }

      // FORMATTING

      addFormatToken('M', ['MM', 2], 'Mo', function () {
          return this.month() + 1;
      });

      addFormatToken('MMM', 0, 0, function (format) {
          return this.localeData().monthsShort(this, format);
      });

      addFormatToken('MMMM', 0, 0, function (format) {
          return this.localeData().months(this, format);
      });

      // ALIASES

      addUnitAlias('month', 'M');

      // PRIORITY

      addUnitPriority('month', 8);

      // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM', function (isStrict, locale) {
          return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM', function (isStrict, locale) {
          return locale.monthsRegex(isStrict);
      });

      addParseToken(['M', 'MM'], function (input, array) {
          array[MONTH] = toInt(input) - 1;
      });

      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
          var month = config._locale.monthsParse(input, token, config._strict);
          // if we didn't find a month name, mark the date as invalid.
          if (month != null) {
              array[MONTH] = month;
          } else {
              getParsingFlags(config).invalidMonth = input;
          }
      });

      // LOCALES

      var defaultLocaleMonths =
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                  '_'
              ),
          defaultLocaleMonthsShort =
              'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          defaultMonthsShortRegex = matchWord,
          defaultMonthsRegex = matchWord;

      function localeMonths(m, format) {
          if (!m) {
              return isArray(this._months)
                  ? this._months
                  : this._months['standalone'];
          }
          return isArray(this._months)
              ? this._months[m.month()]
              : this._months[
                    (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                        ? 'format'
                        : 'standalone'
                ][m.month()];
      }

      function localeMonthsShort(m, format) {
          if (!m) {
              return isArray(this._monthsShort)
                  ? this._monthsShort
                  : this._monthsShort['standalone'];
          }
          return isArray(this._monthsShort)
              ? this._monthsShort[m.month()]
              : this._monthsShort[
                    MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
                ][m.month()];
      }

      function handleStrictParse(monthName, format, strict) {
          var i,
              ii,
              mom,
              llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
              // this is not used
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
              for (i = 0; i < 12; ++i) {
                  mom = createUTC([2000, i]);
                  this._shortMonthsParse[i] = this.monthsShort(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
              }
          }

          if (strict) {
              if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              }
          } else {
              if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              }
          }
      }

      function localeMonthsParse(monthName, format, strict) {
          var i, mom, regex;

          if (this._monthsParseExact) {
              return handleStrictParse.call(this, monthName, format, strict);
          }

          if (!this._monthsParse) {
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
          }

          // TODO: add sorting
          // Sorting makes sure if one month (or abbr) is a prefix of another
          // see sorting in computeMonthsParse
          for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              if (strict && !this._longMonthsParse[i]) {
                  this._longMonthsParse[i] = new RegExp(
                      '^' + this.months(mom, '').replace('.', '') + '$',
                      'i'
                  );
                  this._shortMonthsParse[i] = new RegExp(
                      '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                      'i'
                  );
              }
              if (!strict && !this._monthsParse[i]) {
                  regex =
                      '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                  this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (
                  strict &&
                  format === 'MMMM' &&
                  this._longMonthsParse[i].test(monthName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'MMM' &&
                  this._shortMonthsParse[i].test(monthName)
              ) {
                  return i;
              } else if (!strict && this._monthsParse[i].test(monthName)) {
                  return i;
              }
          }
      }

      // MOMENTS

      function setMonth(mom, value) {
          var dayOfMonth;

          if (!mom.isValid()) {
              // No op
              return mom;
          }

          if (typeof value === 'string') {
              if (/^\d+$/.test(value)) {
                  value = toInt(value);
              } else {
                  value = mom.localeData().monthsParse(value);
                  // TODO: Another silent failure?
                  if (!isNumber(value)) {
                      return mom;
                  }
              }
          }

          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
          return mom;
      }

      function getSetMonth(value) {
          if (value != null) {
              setMonth(this, value);
              hooks.updateOffset(this, true);
              return this;
          } else {
              return get(this, 'Month');
          }
      }

      function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
      }

      function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
              }
              if (isStrict) {
                  return this._monthsShortStrictRegex;
              } else {
                  return this._monthsShortRegex;
              }
          } else {
              if (!hasOwnProp(this, '_monthsShortRegex')) {
                  this._monthsShortRegex = defaultMonthsShortRegex;
              }
              return this._monthsShortStrictRegex && isStrict
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex;
          }
      }

      function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
              }
              if (isStrict) {
                  return this._monthsStrictRegex;
              } else {
                  return this._monthsRegex;
              }
          } else {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  this._monthsRegex = defaultMonthsRegex;
              }
              return this._monthsStrictRegex && isStrict
                  ? this._monthsStrictRegex
                  : this._monthsRegex;
          }
      }

      function computeMonthsParse() {
          function cmpLenRev(a, b) {
              return b.length - a.length;
          }

          var shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom;
          for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              shortPieces.push(this.monthsShort(mom, ''));
              longPieces.push(this.months(mom, ''));
              mixedPieces.push(this.months(mom, ''));
              mixedPieces.push(this.monthsShort(mom, ''));
          }
          // Sorting makes sure if one month (or abbr) is a prefix of another it
          // will match the longer piece.
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
              shortPieces[i] = regexEscape(shortPieces[i]);
              longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
              mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp(
              '^(' + longPieces.join('|') + ')',
              'i'
          );
          this._monthsShortStrictRegex = new RegExp(
              '^(' + shortPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      addFormatToken('Y', 0, 0, function () {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : '+' + y;
      });

      addFormatToken(0, ['YY', 2], 0, function () {
          return this.year() % 100;
      });

      addFormatToken(0, ['YYYY', 4], 0, 'year');
      addFormatToken(0, ['YYYYY', 5], 0, 'year');
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

      // ALIASES

      addUnitAlias('year', 'y');

      // PRIORITIES

      addUnitPriority('year', 1);

      // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);

      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY', function (input, array) {
          array[YEAR] =
              input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken('YY', function (input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken('Y', function (input, array) {
          array[YEAR] = parseInt(input, 10);
      });

      // HELPERS

      function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
      }

      // HOOKS

      hooks.parseTwoDigitYear = function (input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
      };

      // MOMENTS

      var getSetYear = makeGetSet('FullYear', true);

      function getIsLeapYear() {
          return isLeapYear(this.year());
      }

      function createDate(y, m, d, h, M, s, ms) {
          // can't just apply() to create a date:
          // https://stackoverflow.com/q/181348
          var date;
          // the date constructor remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              date = new Date(y + 400, m, d, h, M, s, ms);
              if (isFinite(date.getFullYear())) {
                  date.setFullYear(y);
              }
          } else {
              date = new Date(y, m, d, h, M, s, ms);
          }

          return date;
      }

      function createUTCDate(y) {
          var date, args;
          // the Date.UTC function remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              args = Array.prototype.slice.call(arguments);
              // preserve leap years using a full 400 year cycle, then reset
              args[0] = y + 400;
              date = new Date(Date.UTC.apply(null, args));
              if (isFinite(date.getUTCFullYear())) {
                  date.setUTCFullYear(y);
              }
          } else {
              date = new Date(Date.UTC.apply(null, arguments));
          }

          return date;
      }

      // start-of-first-week - start-of-year
      function firstWeekOffset(year, dow, doy) {
          var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
              fwd = 7 + dow - doy,
              // first-week day local weekday -- which local weekday is fwd
              fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

          return -fwdlw + fwd - 1;
      }

      // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7,
              weekOffset = firstWeekOffset(year, dow, doy),
              dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
              resYear,
              resDayOfYear;

          if (dayOfYear <= 0) {
              resYear = year - 1;
              resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
              resYear = year + 1;
              resDayOfYear = dayOfYear - daysInYear(year);
          } else {
              resYear = year;
              resDayOfYear = dayOfYear;
          }

          return {
              year: resYear,
              dayOfYear: resDayOfYear,
          };
      }

      function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy),
              week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
              resWeek,
              resYear;

          if (week < 1) {
              resYear = mom.year() - 1;
              resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
              resWeek = week - weeksInYear(mom.year(), dow, doy);
              resYear = mom.year() + 1;
          } else {
              resYear = mom.year();
              resWeek = week;
          }

          return {
              week: resWeek,
              year: resYear,
          };
      }

      function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy),
              weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }

      // FORMATTING

      addFormatToken('w', ['ww', 2], 'wo', 'week');
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

      // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W');

      // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5);

      // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);

      addWeekParseToken(
          ['w', 'ww', 'W', 'WW'],
          function (input, week, config, token) {
              week[token.substr(0, 1)] = toInt(input);
          }
      );

      // HELPERS

      // LOCALES

      function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }

      var defaultLocaleWeek = {
          dow: 0, // Sunday is the first day of the week.
          doy: 6, // The week that contains Jan 6th is the first week of the year.
      };

      function localeFirstDayOfWeek() {
          return this._week.dow;
      }

      function localeFirstDayOfYear() {
          return this._week.doy;
      }

      // MOMENTS

      function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, 'd');
      }

      function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, 'd');
      }

      // FORMATTING

      addFormatToken('d', 0, 'do', 'day');

      addFormatToken('dd', 0, 0, function (format) {
          return this.localeData().weekdaysMin(this, format);
      });

      addFormatToken('ddd', 0, 0, function (format) {
          return this.localeData().weekdaysShort(this, format);
      });

      addFormatToken('dddd', 0, 0, function (format) {
          return this.localeData().weekdays(this, format);
      });

      addFormatToken('e', 0, 0, 'weekday');
      addFormatToken('E', 0, 0, 'isoWeekday');

      // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E');

      // PRIORITY
      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11);

      // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd', function (isStrict, locale) {
          return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd', function (isStrict, locale) {
          return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd', function (isStrict, locale) {
          return locale.weekdaysRegex(isStrict);
      });

      addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
          var weekday = config._locale.weekdaysParse(input, token, config._strict);
          // if we didn't get a weekday name, mark the date as invalid
          if (weekday != null) {
              week.d = weekday;
          } else {
              getParsingFlags(config).invalidWeekday = input;
          }
      });

      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
          week[token] = toInt(input);
      });

      // HELPERS

      function parseWeekday(input, locale) {
          if (typeof input !== 'string') {
              return input;
          }

          if (!isNaN(input)) {
              return parseInt(input, 10);
          }

          input = locale.weekdaysParse(input);
          if (typeof input === 'number') {
              return input;
          }

          return null;
      }

      function parseIsoWeekday(input, locale) {
          if (typeof input === 'string') {
              return locale.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
      }

      // LOCALES
      function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
      }

      var defaultLocaleWeekdays =
              'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          defaultWeekdaysRegex = matchWord,
          defaultWeekdaysShortRegex = matchWord,
          defaultWeekdaysMinRegex = matchWord;

      function localeWeekdays(m, format) {
          var weekdays = isArray(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                    m && m !== true && this._weekdays.isFormat.test(format)
                        ? 'format'
                        : 'standalone'
                ];
          return m === true
              ? shiftWeekdays(weekdays, this._week.dow)
              : m
              ? weekdays[m.day()]
              : weekdays;
      }

      function localeWeekdaysShort(m) {
          return m === true
              ? shiftWeekdays(this._weekdaysShort, this._week.dow)
              : m
              ? this._weekdaysShort[m.day()]
              : this._weekdaysShort;
      }

      function localeWeekdaysMin(m) {
          return m === true
              ? shiftWeekdays(this._weekdaysMin, this._week.dow)
              : m
              ? this._weekdaysMin[m.day()]
              : this._weekdaysMin;
      }

      function handleStrictParse$1(weekdayName, format, strict) {
          var i,
              ii,
              mom,
              llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._minWeekdaysParse = [];

              for (i = 0; i < 7; ++i) {
                  mom = createUTC([2000, 1]).day(i);
                  this._minWeekdaysParse[i] = this.weekdaysMin(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._shortWeekdaysParse[i] = this.weekdaysShort(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
              }
          }

          if (strict) {
              if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              }
          } else {
              if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              }
          }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
          var i, mom, regex;

          if (this._weekdaysParseExact) {
              return handleStrictParse$1.call(this, weekdayName, format, strict);
          }

          if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._minWeekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._fullWeekdaysParse = [];
          }

          for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already

              mom = createUTC([2000, 1]).day(i);
              if (strict && !this._fullWeekdaysParse[i]) {
                  this._fullWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
                  this._shortWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
                  this._minWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
              }
              if (!this._weekdaysParse[i]) {
                  regex =
                      '^' +
                      this.weekdays(mom, '') +
                      '|^' +
                      this.weekdaysShort(mom, '') +
                      '|^' +
                      this.weekdaysMin(mom, '');
                  this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (
                  strict &&
                  format === 'dddd' &&
                  this._fullWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'ddd' &&
                  this._shortWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'dd' &&
                  this._minWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                  return i;
              }
          }
      }

      // MOMENTS

      function getSetDayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
              input = parseWeekday(input, this.localeData());
              return this.add(input - day, 'd');
          } else {
              return day;
          }
      }

      function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, 'd');
      }

      function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }

          // behaves the same as moment#day except
          // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
          // as a setter, sunday should belong to the previous week.

          if (input != null) {
              var weekday = parseIsoWeekday(input, this.localeData());
              return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
              return this.day() || 7;
          }
      }

      function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysStrictRegex;
              } else {
                  return this._weekdaysRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  this._weekdaysRegex = defaultWeekdaysRegex;
              }
              return this._weekdaysStrictRegex && isStrict
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex;
          }
      }

      function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysShortStrictRegex;
              } else {
                  return this._weekdaysShortRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                  this._weekdaysShortRegex = defaultWeekdaysShortRegex;
              }
              return this._weekdaysShortStrictRegex && isStrict
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex;
          }
      }

      function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysMinStrictRegex;
              } else {
                  return this._weekdaysMinRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                  this._weekdaysMinRegex = defaultWeekdaysMinRegex;
              }
              return this._weekdaysMinStrictRegex && isStrict
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex;
          }
      }

      function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
              return b.length - a.length;
          }

          var minPieces = [],
              shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom,
              minp,
              shortp,
              longp;
          for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, 1]).day(i);
              minp = regexEscape(this.weekdaysMin(mom, ''));
              shortp = regexEscape(this.weekdaysShort(mom, ''));
              longp = regexEscape(this.weekdays(mom, ''));
              minPieces.push(minp);
              shortPieces.push(shortp);
              longPieces.push(longp);
              mixedPieces.push(minp);
              mixedPieces.push(shortp);
              mixedPieces.push(longp);
          }
          // Sorting makes sure if one weekday (or abbr) is a prefix of another it
          // will match the longer piece.
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;

          this._weekdaysStrictRegex = new RegExp(
              '^(' + longPieces.join('|') + ')',
              'i'
          );
          this._weekdaysShortStrictRegex = new RegExp(
              '^(' + shortPieces.join('|') + ')',
              'i'
          );
          this._weekdaysMinStrictRegex = new RegExp(
              '^(' + minPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      function hFormat() {
          return this.hours() % 12 || 12;
      }

      function kFormat() {
          return this.hours() || 24;
      }

      addFormatToken('H', ['HH', 2], 0, 'hour');
      addFormatToken('h', ['hh', 2], 0, hFormat);
      addFormatToken('k', ['kk', 2], 0, kFormat);

      addFormatToken('hmm', 0, 0, function () {
          return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });

      addFormatToken('hmmss', 0, 0, function () {
          return (
              '' +
              hFormat.apply(this) +
              zeroFill(this.minutes(), 2) +
              zeroFill(this.seconds(), 2)
          );
      });

      addFormatToken('Hmm', 0, 0, function () {
          return '' + this.hours() + zeroFill(this.minutes(), 2);
      });

      addFormatToken('Hmmss', 0, 0, function () {
          return (
              '' +
              this.hours() +
              zeroFill(this.minutes(), 2) +
              zeroFill(this.seconds(), 2)
          );
      });

      function meridiem(token, lowercase) {
          addFormatToken(token, 0, 0, function () {
              return this.localeData().meridiem(
                  this.hours(),
                  this.minutes(),
                  lowercase
              );
          });
      }

      meridiem('a', true);
      meridiem('A', false);

      // ALIASES

      addUnitAlias('hour', 'h');

      // PRIORITY
      addUnitPriority('hour', 13);

      // PARSING

      function matchMeridiem(isStrict, locale) {
          return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);

      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);

      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'], function (input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(['a', 'A'], function (input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
      });
      addParseToken(['h', 'hh'], function (input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
              pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('Hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken('Hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
              pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
      });

      // LOCALES

      function localeIsPM(input) {
          // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
          // Using charAt should be more compatible.
          return (input + '').toLowerCase().charAt(0) === 'p';
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
          // Setting the hour should keep the time, because the user explicitly
          // specified which hour they want. So trying to maintain the same hour (in
          // a new timezone) makes sense. Adding/subtracting hours does not follow
          // this rule.
          getSetHour = makeGetSet('Hours', true);

      function localeMeridiem(hours, minutes, isLower) {
          if (hours > 11) {
              return isLower ? 'pm' : 'PM';
          } else {
              return isLower ? 'am' : 'AM';
          }
      }

      var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,

          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,

          week: defaultLocaleWeek,

          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,

          meridiemParse: defaultLocaleMeridiemParse,
      };

      // internal storage for locale config files
      var locales = {},
          localeFamilies = {},
          globalLocale;

      function commonPrefix(arr1, arr2) {
          var i,
              minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
              if (arr1[i] !== arr2[i]) {
                  return i;
              }
          }
          return minl;
      }

      function normalizeLocale(key) {
          return key ? key.toLowerCase().replace('_', '-') : key;
      }

      // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
      function chooseLocale(names) {
          var i = 0,
              j,
              next,
              locale,
              split;

          while (i < names.length) {
              split = normalizeLocale(names[i]).split('-');
              j = split.length;
              next = normalizeLocale(names[i + 1]);
              next = next ? next.split('-') : null;
              while (j > 0) {
                  locale = loadLocale(split.slice(0, j).join('-'));
                  if (locale) {
                      return locale;
                  }
                  if (
                      next &&
                      next.length >= j &&
                      commonPrefix(split, next) >= j - 1
                  ) {
                      //the next array item is better than a shallower substring of this one
                      break;
                  }
                  j--;
              }
              i++;
          }
          return globalLocale;
      }

      function isLocaleNameSane(name) {
          // Prevent names that look like filesystem paths, i.e contain '/' or '\'
          return name.match('^[^/\\\\]*$') != null;
      }

      function loadLocale(name) {
          var oldLocale = null,
              aliasedRequire;
          // TODO: Find a better way to register and load all the locales in Node
          if (
              locales[name] === undefined &&
              'object' !== 'undefined' &&
              module &&
              module.exports &&
              isLocaleNameSane(name)
          ) {
              try {
                  oldLocale = globalLocale._abbr;
                  aliasedRequire = commonjsRequire;
                  aliasedRequire('./locale/' + name);
                  getSetGlobalLocale(oldLocale);
              } catch (e) {
                  // mark as not found to avoid repeating expensive file require call causing high CPU
                  // when trying to find en-US, en_US, en-us for every format call
                  locales[name] = null; // null means not found
              }
          }
          return locales[name];
      }

      // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.
      function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
              if (isUndefined(values)) {
                  data = getLocale(key);
              } else {
                  data = defineLocale(key, values);
              }

              if (data) {
                  // moment.duration._locale = moment._locale = data;
                  globalLocale = data;
              } else {
                  if (typeof console !== 'undefined' && console.warn) {
                      //warn user if arguments are passed but the locale could not be set
                      console.warn(
                          'Locale ' + key + ' not found. Did you forget to load it?'
                      );
                  }
              }
          }

          return globalLocale._abbr;
      }

      function defineLocale(name, config) {
          if (config !== null) {
              var locale,
                  parentConfig = baseConfig;
              config.abbr = name;
              if (locales[name] != null) {
                  deprecateSimple(
                      'defineLocaleOverride',
                      'use moment.updateLocale(localeName, config) to change ' +
                          'an existing locale. moment.defineLocale(localeName, ' +
                          'config) should only be used for creating a new locale ' +
                          'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                  );
                  parentConfig = locales[name]._config;
              } else if (config.parentLocale != null) {
                  if (locales[config.parentLocale] != null) {
                      parentConfig = locales[config.parentLocale]._config;
                  } else {
                      locale = loadLocale(config.parentLocale);
                      if (locale != null) {
                          parentConfig = locale._config;
                      } else {
                          if (!localeFamilies[config.parentLocale]) {
                              localeFamilies[config.parentLocale] = [];
                          }
                          localeFamilies[config.parentLocale].push({
                              name: name,
                              config: config,
                          });
                          return null;
                      }
                  }
              }
              locales[name] = new Locale(mergeConfigs(parentConfig, config));

              if (localeFamilies[name]) {
                  localeFamilies[name].forEach(function (x) {
                      defineLocale(x.name, x.config);
                  });
              }

              // backwards compat for now: also set the locale
              // make sure we set the locale AFTER all child locales have been
              // created, so we won't end up with the child locale set.
              getSetGlobalLocale(name);

              return locales[name];
          } else {
              // useful for testing
              delete locales[name];
              return null;
          }
      }

      function updateLocale(name, config) {
          if (config != null) {
              var locale,
                  tmpLocale,
                  parentConfig = baseConfig;

              if (locales[name] != null && locales[name].parentLocale != null) {
                  // Update existing child locale in-place to avoid memory-leaks
                  locales[name].set(mergeConfigs(locales[name]._config, config));
              } else {
                  // MERGE
                  tmpLocale = loadLocale(name);
                  if (tmpLocale != null) {
                      parentConfig = tmpLocale._config;
                  }
                  config = mergeConfigs(parentConfig, config);
                  if (tmpLocale == null) {
                      // updateLocale is called for creating a new locale
                      // Set abbr so it will have a name (getters return
                      // undefined otherwise).
                      config.abbr = name;
                  }
                  locale = new Locale(config);
                  locale.parentLocale = locales[name];
                  locales[name] = locale;
              }

              // backwards compat for now: also set the locale
              getSetGlobalLocale(name);
          } else {
              // pass null for config to unupdate, useful for tests
              if (locales[name] != null) {
                  if (locales[name].parentLocale != null) {
                      locales[name] = locales[name].parentLocale;
                      if (name === getSetGlobalLocale()) {
                          getSetGlobalLocale(name);
                      }
                  } else if (locales[name] != null) {
                      delete locales[name];
                  }
              }
          }
          return locales[name];
      }

      // returns locale data
      function getLocale(key) {
          var locale;

          if (key && key._locale && key._locale._abbr) {
              key = key._locale._abbr;
          }

          if (!key) {
              return globalLocale;
          }

          if (!isArray(key)) {
              //short-circuit everything else
              locale = loadLocale(key);
              if (locale) {
                  return locale;
              }
              key = [key];
          }

          return chooseLocale(key);
      }

      function listLocales() {
          return keys(locales);
      }

      function checkOverflow(m) {
          var overflow,
              a = m._a;

          if (a && getParsingFlags(m).overflow === -2) {
              overflow =
                  a[MONTH] < 0 || a[MONTH] > 11
                      ? MONTH
                      : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                      ? DATE
                      : a[HOUR] < 0 ||
                        a[HOUR] > 24 ||
                        (a[HOUR] === 24 &&
                            (a[MINUTE] !== 0 ||
                                a[SECOND] !== 0 ||
                                a[MILLISECOND] !== 0))
                      ? HOUR
                      : a[MINUTE] < 0 || a[MINUTE] > 59
                      ? MINUTE
                      : a[SECOND] < 0 || a[SECOND] > 59
                      ? SECOND
                      : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                      ? MILLISECOND
                      : -1;

              if (
                  getParsingFlags(m)._overflowDayOfYear &&
                  (overflow < YEAR || overflow > DATE)
              ) {
                  overflow = DATE;
              }
              if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                  overflow = WEEK;
              }
              if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                  overflow = WEEKDAY;
              }

              getParsingFlags(m).overflow = overflow;
          }

          return m;
      }

      // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
      var extendedIsoRegex =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          basicIsoRegex =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
          isoDates = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, false],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, false],
              ['YYYYDDD', /\d{7}/],
              ['YYYYMM', /\d{6}/, false],
              ['YYYY', /\d{4}/, false],
          ],
          // iso time formats and regexes
          isoTimes = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/],
          ],
          aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
          // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
          rfc2822 =
              /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          obsOffsets = {
              UT: 0,
              GMT: 0,
              EDT: -4 * 60,
              EST: -5 * 60,
              CDT: -5 * 60,
              CST: -6 * 60,
              MDT: -6 * 60,
              MST: -7 * 60,
              PDT: -7 * 60,
              PST: -8 * 60,
          };

      // date from iso format
      function configFromISO(config) {
          var i,
              l,
              string = config._i,
              match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
              allowTime,
              dateFormat,
              timeFormat,
              tzFormat,
              isoDatesLen = isoDates.length,
              isoTimesLen = isoTimes.length;

          if (match) {
              getParsingFlags(config).iso = true;
              for (i = 0, l = isoDatesLen; i < l; i++) {
                  if (isoDates[i][1].exec(match[1])) {
                      dateFormat = isoDates[i][0];
                      allowTime = isoDates[i][2] !== false;
                      break;
                  }
              }
              if (dateFormat == null) {
                  config._isValid = false;
                  return;
              }
              if (match[3]) {
                  for (i = 0, l = isoTimesLen; i < l; i++) {
                      if (isoTimes[i][1].exec(match[3])) {
                          // match[2] should be 'T' or space
                          timeFormat = (match[2] || ' ') + isoTimes[i][0];
                          break;
                      }
                  }
                  if (timeFormat == null) {
                      config._isValid = false;
                      return;
                  }
              }
              if (!allowTime && timeFormat != null) {
                  config._isValid = false;
                  return;
              }
              if (match[4]) {
                  if (tzRegex.exec(match[4])) {
                      tzFormat = 'Z';
                  } else {
                      config._isValid = false;
                      return;
                  }
              }
              config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
              configFromStringAndFormat(config);
          } else {
              config._isValid = false;
          }
      }

      function extractFromRFC2822Strings(
          yearStr,
          monthStr,
          dayStr,
          hourStr,
          minuteStr,
          secondStr
      ) {
          var result = [
              untruncateYear(yearStr),
              defaultLocaleMonthsShort.indexOf(monthStr),
              parseInt(dayStr, 10),
              parseInt(hourStr, 10),
              parseInt(minuteStr, 10),
          ];

          if (secondStr) {
              result.push(parseInt(secondStr, 10));
          }

          return result;
      }

      function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
              return 2000 + year;
          } else if (year <= 999) {
              return 1900 + year;
          }
          return year;
      }

      function preprocessRFC2822(s) {
          // Remove comments and folding whitespace and replace multiple-spaces with a single space
          return s
              .replace(/\([^()]*\)|[\n\t]/g, ' ')
              .replace(/(\s\s+)/g, ' ')
              .replace(/^\s\s*/, '')
              .replace(/\s\s*$/, '');
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
              // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
              var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                  weekdayActual = new Date(
                      parsedInput[0],
                      parsedInput[1],
                      parsedInput[2]
                  ).getDay();
              if (weekdayProvided !== weekdayActual) {
                  getParsingFlags(config).weekdayMismatch = true;
                  config._isValid = false;
                  return false;
              }
          }
          return true;
      }

      function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
              return obsOffsets[obsOffset];
          } else if (militaryOffset) {
              // the only allowed military tz is Z
              return 0;
          } else {
              var hm = parseInt(numOffset, 10),
                  m = hm % 100,
                  h = (hm - m) / 100;
              return h * 60 + m;
          }
      }

      // date and time from ref 2822 format
      function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)),
              parsedArray;
          if (match) {
              parsedArray = extractFromRFC2822Strings(
                  match[4],
                  match[3],
                  match[2],
                  match[5],
                  match[6],
                  match[7]
              );
              if (!checkWeekday(match[1], parsedArray, config)) {
                  return;
              }

              config._a = parsedArray;
              config._tzm = calculateOffset(match[8], match[9], match[10]);

              config._d = createUTCDate.apply(null, config._a);
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

              getParsingFlags(config).rfc2822 = true;
          } else {
              config._isValid = false;
          }
      }

      // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
      function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
              config._d = new Date(+matched[1]);
              return;
          }

          configFromISO(config);
          if (config._isValid === false) {
              delete config._isValid;
          } else {
              return;
          }

          configFromRFC2822(config);
          if (config._isValid === false) {
              delete config._isValid;
          } else {
              return;
          }

          if (config._strict) {
              config._isValid = false;
          } else {
              // Final attempt, use Input Fallback
              hooks.createFromInputFallback(config);
          }
      }

      hooks.createFromInputFallback = deprecate(
          'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
              'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
              'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
          function (config) {
              config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
          }
      );

      // Pick the first defined of two or three arguments.
      function defaults(a, b, c) {
          if (a != null) {
              return a;
          }
          if (b != null) {
              return b;
          }
          return c;
      }

      function currentDateArray(config) {
          // hooks is actually the exported moment object
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
              return [
                  nowValue.getUTCFullYear(),
                  nowValue.getUTCMonth(),
                  nowValue.getUTCDate(),
              ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }

      // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]
      function configFromArray(config) {
          var i,
              date,
              input = [],
              currentDate,
              expectedWeekday,
              yearToUse;

          if (config._d) {
              return;
          }

          currentDate = currentDateArray(config);

          //compute day of the year from weeks and weekdays
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
              dayOfYearFromWeekInfo(config);
          }

          //if the day of the year is set, figure out what it is
          if (config._dayOfYear != null) {
              yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

              if (
                  config._dayOfYear > daysInYear(yearToUse) ||
                  config._dayOfYear === 0
              ) {
                  getParsingFlags(config)._overflowDayOfYear = true;
              }

              date = createUTCDate(yearToUse, 0, config._dayOfYear);
              config._a[MONTH] = date.getUTCMonth();
              config._a[DATE] = date.getUTCDate();
          }

          // Default to current date.
          // * if no year, month, day of month are given, default to today
          // * if day of month is given, default month and year
          // * if month is given, default only year
          // * if year is given, don't default anything
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
              config._a[i] = input[i] = currentDate[i];
          }

          // Zero out whatever was not defaulted, including time
          for (; i < 7; i++) {
              config._a[i] = input[i] =
                  config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
          }

          // Check for 24:00:00.000
          if (
              config._a[HOUR] === 24 &&
              config._a[MINUTE] === 0 &&
              config._a[SECOND] === 0 &&
              config._a[MILLISECOND] === 0
          ) {
              config._nextDay = true;
              config._a[HOUR] = 0;
          }

          config._d = (config._useUTC ? createUTCDate : createDate).apply(
              null,
              input
          );
          expectedWeekday = config._useUTC
              ? config._d.getUTCDay()
              : config._d.getDay();

          // Apply timezone offset from input. The actual utcOffset can be changed
          // with parseZone.
          if (config._tzm != null) {
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }

          if (config._nextDay) {
              config._a[HOUR] = 24;
          }

          // check for mismatching day of week
          if (
              config._w &&
              typeof config._w.d !== 'undefined' &&
              config._w.d !== expectedWeekday
          ) {
              getParsingFlags(config).weekdayMismatch = true;
          }
      }

      function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
              dow = 1;
              doy = 4;

              // TODO: We need to take the current isoWeekYear, but that depends on
              // how we interpret now (local, utc, fixed offset). So create
              // a now version of current config (take local/utc/offset flags, and
              // create now).
              weekYear = defaults(
                  w.GG,
                  config._a[YEAR],
                  weekOfYear(createLocal(), 1, 4).year
              );
              week = defaults(w.W, 1);
              weekday = defaults(w.E, 1);
              if (weekday < 1 || weekday > 7) {
                  weekdayOverflow = true;
              }
          } else {
              dow = config._locale._week.dow;
              doy = config._locale._week.doy;

              curWeek = weekOfYear(createLocal(), dow, doy);

              weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

              // Default to current week.
              week = defaults(w.w, curWeek.week);

              if (w.d != null) {
                  // weekday -- low day numbers are considered next week
                  weekday = w.d;
                  if (weekday < 0 || weekday > 6) {
                      weekdayOverflow = true;
                  }
              } else if (w.e != null) {
                  // local weekday -- counting starts from beginning of week
                  weekday = w.e + dow;
                  if (w.e < 0 || w.e > 6) {
                      weekdayOverflow = true;
                  }
              } else {
                  // default to beginning of week
                  weekday = dow;
              }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
              getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
              getParsingFlags(config)._overflowWeekday = true;
          } else {
              temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
              config._a[YEAR] = temp.year;
              config._dayOfYear = temp.dayOfYear;
          }
      }

      // constant that refers to the ISO standard
      hooks.ISO_8601 = function () {};

      // constant that refers to the RFC 2822 form
      hooks.RFC_2822 = function () {};

      // date from string and format string
      function configFromStringAndFormat(config) {
          // TODO: Move this to another part of the creation flow to prevent circular deps
          if (config._f === hooks.ISO_8601) {
              configFromISO(config);
              return;
          }
          if (config._f === hooks.RFC_2822) {
              configFromRFC2822(config);
              return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;

          // This array is used to make a Date, either with `new Date` or `Date.UTC`
          var string = '' + config._i,
              i,
              parsedInput,
              tokens,
              token,
              skipped,
              stringLength = string.length,
              totalParsedInputLength = 0,
              era,
              tokenLen;

          tokens =
              expandFormat(config._f, config._locale).match(formattingTokens) || [];
          tokenLen = tokens.length;
          for (i = 0; i < tokenLen; i++) {
              token = tokens[i];
              parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                  [])[0];
              if (parsedInput) {
                  skipped = string.substr(0, string.indexOf(parsedInput));
                  if (skipped.length > 0) {
                      getParsingFlags(config).unusedInput.push(skipped);
                  }
                  string = string.slice(
                      string.indexOf(parsedInput) + parsedInput.length
                  );
                  totalParsedInputLength += parsedInput.length;
              }
              // don't parse if it's not a known token
              if (formatTokenFunctions[token]) {
                  if (parsedInput) {
                      getParsingFlags(config).empty = false;
                  } else {
                      getParsingFlags(config).unusedTokens.push(token);
                  }
                  addTimeToArrayFromToken(token, parsedInput, config);
              } else if (config._strict && !parsedInput) {
                  getParsingFlags(config).unusedTokens.push(token);
              }
          }

          // add remaining unparsed input length to the string
          getParsingFlags(config).charsLeftOver =
              stringLength - totalParsedInputLength;
          if (string.length > 0) {
              getParsingFlags(config).unusedInput.push(string);
          }

          // clear _12h flag if hour is <= 12
          if (
              config._a[HOUR] <= 12 &&
              getParsingFlags(config).bigHour === true &&
              config._a[HOUR] > 0
          ) {
              getParsingFlags(config).bigHour = undefined;
          }

          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          // handle meridiem
          config._a[HOUR] = meridiemFixWrap(
              config._locale,
              config._a[HOUR],
              config._meridiem
          );

          // handle era
          era = getParsingFlags(config).era;
          if (era !== null) {
              config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }

          configFromArray(config);
          checkOverflow(config);
      }

      function meridiemFixWrap(locale, hour, meridiem) {
          var isPm;

          if (meridiem == null) {
              // nothing to do
              return hour;
          }
          if (locale.meridiemHour != null) {
              return locale.meridiemHour(hour, meridiem);
          } else if (locale.isPM != null) {
              // Fallback
              isPm = locale.isPM(meridiem);
              if (isPm && hour < 12) {
                  hour += 12;
              }
              if (!isPm && hour === 12) {
                  hour = 0;
              }
              return hour;
          } else {
              // this is not supposed to happen
              return hour;
          }
      }

      // date from string and array of format strings
      function configFromStringAndArray(config) {
          var tempConfig,
              bestMoment,
              scoreToBeat,
              i,
              currentScore,
              validFormatFound,
              bestFormatIsValid = false,
              configfLen = config._f.length;

          if (configfLen === 0) {
              getParsingFlags(config).invalidFormat = true;
              config._d = new Date(NaN);
              return;
          }

          for (i = 0; i < configfLen; i++) {
              currentScore = 0;
              validFormatFound = false;
              tempConfig = copyConfig({}, config);
              if (config._useUTC != null) {
                  tempConfig._useUTC = config._useUTC;
              }
              tempConfig._f = config._f[i];
              configFromStringAndFormat(tempConfig);

              if (isValid(tempConfig)) {
                  validFormatFound = true;
              }

              // if there is any input that was not parsed add a penalty for that format
              currentScore += getParsingFlags(tempConfig).charsLeftOver;

              //or tokens
              currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

              getParsingFlags(tempConfig).score = currentScore;

              if (!bestFormatIsValid) {
                  if (
                      scoreToBeat == null ||
                      currentScore < scoreToBeat ||
                      validFormatFound
                  ) {
                      scoreToBeat = currentScore;
                      bestMoment = tempConfig;
                      if (validFormatFound) {
                          bestFormatIsValid = true;
                      }
                  }
              } else {
                  if (currentScore < scoreToBeat) {
                      scoreToBeat = currentScore;
                      bestMoment = tempConfig;
                  }
              }
          }

          extend(config, bestMoment || tempConfig);
      }

      function configFromObject(config) {
          if (config._d) {
              return;
          }

          var i = normalizeObjectUnits(config._i),
              dayOrDate = i.day === undefined ? i.date : i.day;
          config._a = map(
              [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
              function (obj) {
                  return obj && parseInt(obj, 10);
              }
          );

          configFromArray(config);
      }

      function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
              // Adding is smart enough around DST
              res.add(1, 'd');
              res._nextDay = undefined;
          }

          return res;
      }

      function prepareConfig(config) {
          var input = config._i,
              format = config._f;

          config._locale = config._locale || getLocale(config._l);

          if (input === null || (format === undefined && input === '')) {
              return createInvalid({ nullInput: true });
          }

          if (typeof input === 'string') {
              config._i = input = config._locale.preparse(input);
          }

          if (isMoment(input)) {
              return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
              config._d = input;
          } else if (isArray(format)) {
              configFromStringAndArray(config);
          } else if (format) {
              configFromStringAndFormat(config);
          } else {
              configFromInput(config);
          }

          if (!isValid(config)) {
              config._d = null;
          }

          return config;
      }

      function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
              config._d = new Date(hooks.now());
          } else if (isDate(input)) {
              config._d = new Date(input.valueOf());
          } else if (typeof input === 'string') {
              configFromString(config);
          } else if (isArray(input)) {
              config._a = map(input.slice(0), function (obj) {
                  return parseInt(obj, 10);
              });
              configFromArray(config);
          } else if (isObject(input)) {
              configFromObject(config);
          } else if (isNumber(input)) {
              // from milliseconds
              config._d = new Date(input);
          } else {
              hooks.createFromInputFallback(config);
          }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
          var c = {};

          if (format === true || format === false) {
              strict = format;
              format = undefined;
          }

          if (locale === true || locale === false) {
              strict = locale;
              locale = undefined;
          }

          if (
              (isObject(input) && isObjectEmpty(input)) ||
              (isArray(input) && input.length === 0)
          ) {
              input = undefined;
          }
          // object construction must be done this way.
          // https://github.com/moment/moment/issues/1423
          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale;
          c._i = input;
          c._f = format;
          c._strict = strict;

          return createFromConfig(c);
      }

      function createLocal(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, false);
      }

      var prototypeMin = deprecate(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                  var other = createLocal.apply(null, arguments);
                  if (this.isValid() && other.isValid()) {
                      return other < this ? this : other;
                  } else {
                      return createInvalid();
                  }
              }
          ),
          prototypeMax = deprecate(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                  var other = createLocal.apply(null, arguments);
                  if (this.isValid() && other.isValid()) {
                      return other > this ? this : other;
                  } else {
                      return createInvalid();
                  }
              }
          );

      // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.
      function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
              moments = moments[0];
          }
          if (!moments.length) {
              return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
              if (!moments[i].isValid() || moments[i][fn](res)) {
                  res = moments[i];
              }
          }
          return res;
      }

      // TODO: Use [].sort instead?
      function min() {
          var args = [].slice.call(arguments, 0);

          return pickBy('isBefore', args);
      }

      function max() {
          var args = [].slice.call(arguments, 0);

          return pickBy('isAfter', args);
      }

      var now = function () {
          return Date.now ? Date.now() : +new Date();
      };

      var ordering = [
          'year',
          'quarter',
          'month',
          'week',
          'day',
          'hour',
          'minute',
          'second',
          'millisecond',
      ];

      function isDurationValid(m) {
          var key,
              unitHasDecimal = false,
              i,
              orderLen = ordering.length;
          for (key in m) {
              if (
                  hasOwnProp(m, key) &&
                  !(
                      indexOf.call(ordering, key) !== -1 &&
                      (m[key] == null || !isNaN(m[key]))
                  )
              ) {
                  return false;
              }
          }

          for (i = 0; i < orderLen; ++i) {
              if (m[ordering[i]]) {
                  if (unitHasDecimal) {
                      return false; // only allow non-integers for smallest unit
                  }
                  if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                      unitHasDecimal = true;
                  }
              }
          }

          return true;
      }

      function isValid$1() {
          return this._isValid;
      }

      function createInvalid$1() {
          return createDuration(NaN);
      }

      function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration),
              years = normalizedInput.year || 0,
              quarters = normalizedInput.quarter || 0,
              months = normalizedInput.month || 0,
              weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
              days = normalizedInput.day || 0,
              hours = normalizedInput.hour || 0,
              minutes = normalizedInput.minute || 0,
              seconds = normalizedInput.second || 0,
              milliseconds = normalizedInput.millisecond || 0;

          this._isValid = isDurationValid(normalizedInput);

          // representation for dateAddRemove
          this._milliseconds =
              +milliseconds +
              seconds * 1e3 + // 1000
              minutes * 6e4 + // 1000 * 60
              hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
          // Because of dateAddRemove treats 24 hours as different from a
          // day when working around DST, we need to store them separately
          this._days = +days + weeks * 7;
          // It is impossible to translate months into days without knowing
          // which months you are are talking about, so we have to store
          // it separately.
          this._months = +months + quarters * 3 + years * 12;

          this._data = {};

          this._locale = getLocale();

          this._bubble();
      }

      function isDuration(obj) {
          return obj instanceof Duration;
      }

      function absRound(number) {
          if (number < 0) {
              return Math.round(-1 * number) * -1;
          } else {
              return Math.round(number);
          }
      }

      // compare two arrays, return the number of differences
      function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length),
              lengthDiff = Math.abs(array1.length - array2.length),
              diffs = 0,
              i;
          for (i = 0; i < len; i++) {
              if (
                  (dontConvert && array1[i] !== array2[i]) ||
                  (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
              ) {
                  diffs++;
              }
          }
          return diffs + lengthDiff;
      }

      // FORMATTING

      function offset(token, separator) {
          addFormatToken(token, 0, 0, function () {
              var offset = this.utcOffset(),
                  sign = '+';
              if (offset < 0) {
                  offset = -offset;
                  sign = '-';
              }
              return (
                  sign +
                  zeroFill(~~(offset / 60), 2) +
                  separator +
                  zeroFill(~~offset % 60, 2)
              );
          });
      }

      offset('Z', ':');
      offset('ZZ', '');

      // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
      });

      // HELPERS

      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']
      var chunkOffset = /([\+\-]|\d\d)/gi;

      function offsetFromString(matcher, string) {
          var matches = (string || '').match(matcher),
              chunk,
              parts,
              minutes;

          if (matches === null) {
              return null;
          }

          chunk = matches[matches.length - 1] || [];
          parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
          minutes = +(parts[1] * 60) + toInt(parts[2]);

          return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
      }

      // Return a moment from input, that is local/utc/zone equivalent to model.
      function cloneWithOffset(input, model) {
          var res, diff;
          if (model._isUTC) {
              res = model.clone();
              diff =
                  (isMoment(input) || isDate(input)
                      ? input.valueOf()
                      : createLocal(input).valueOf()) - res.valueOf();
              // Use low-level api, because this fn is low-level api.
              res._d.setTime(res._d.valueOf() + diff);
              hooks.updateOffset(res, false);
              return res;
          } else {
              return createLocal(input).local();
          }
      }

      function getDateOffset(m) {
          // On Firefox.24 Date#getTimezoneOffset returns a floating point.
          // https://github.com/moment/moment/pull/1871
          return -Math.round(m._d.getTimezoneOffset());
      }

      // HOOKS

      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.
      hooks.updateOffset = function () {};

      // MOMENTS

      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.
      function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset = this._offset || 0,
              localAdjust;
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          if (input != null) {
              if (typeof input === 'string') {
                  input = offsetFromString(matchShortOffset, input);
                  if (input === null) {
                      return this;
                  }
              } else if (Math.abs(input) < 16 && !keepMinutes) {
                  input = input * 60;
              }
              if (!this._isUTC && keepLocalTime) {
                  localAdjust = getDateOffset(this);
              }
              this._offset = input;
              this._isUTC = true;
              if (localAdjust != null) {
                  this.add(localAdjust, 'm');
              }
              if (offset !== input) {
                  if (!keepLocalTime || this._changeInProgress) {
                      addSubtract(
                          this,
                          createDuration(input - offset, 'm'),
                          1,
                          false
                      );
                  } else if (!this._changeInProgress) {
                      this._changeInProgress = true;
                      hooks.updateOffset(this, true);
                      this._changeInProgress = null;
                  }
              }
              return this;
          } else {
              return this._isUTC ? offset : getDateOffset(this);
          }
      }

      function getSetZone(input, keepLocalTime) {
          if (input != null) {
              if (typeof input !== 'string') {
                  input = -input;
              }

              this.utcOffset(input, keepLocalTime);

              return this;
          } else {
              return -this.utcOffset();
          }
      }

      function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
      }

      function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
              this.utcOffset(0, keepLocalTime);
              this._isUTC = false;

              if (keepLocalTime) {
                  this.subtract(getDateOffset(this), 'm');
              }
          }
          return this;
      }

      function setOffsetToParsedOffset() {
          if (this._tzm != null) {
              this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === 'string') {
              var tZone = offsetFromString(matchOffset, this._i);
              if (tZone != null) {
                  this.utcOffset(tZone);
              } else {
                  this.utcOffset(0, true);
              }
          }
          return this;
      }

      function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
              return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;

          return (this.utcOffset() - input) % 60 === 0;
      }

      function isDaylightSavingTime() {
          return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
          );
      }

      function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
              return this._isDSTShifted;
          }

          var c = {},
              other;

          copyConfig(c, this);
          c = prepareConfig(c);

          if (c._a) {
              other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
              this._isDSTShifted =
                  this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
              this._isDSTShifted = false;
          }

          return this._isDSTShifted;
      }

      function isLocal() {
          return this.isValid() ? !this._isUTC : false;
      }

      function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
      }

      function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }

      // ASP.NET json date format regex
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
          // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
          // and further modified to allow for strings containing both week and day
          isoRegex =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function createDuration(input, key) {
          var duration = input,
              // matching against regexp is expensive, do it on demand
              match = null,
              sign,
              ret,
              diffRes;

          if (isDuration(input)) {
              duration = {
                  ms: input._milliseconds,
                  d: input._days,
                  M: input._months,
              };
          } else if (isNumber(input) || !isNaN(+input)) {
              duration = {};
              if (key) {
                  duration[key] = +input;
              } else {
                  duration.milliseconds = +input;
              }
          } else if ((match = aspNetRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                  y: 0,
                  d: toInt(match[DATE]) * sign,
                  h: toInt(match[HOUR]) * sign,
                  m: toInt(match[MINUTE]) * sign,
                  s: toInt(match[SECOND]) * sign,
                  ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
              };
          } else if ((match = isoRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                  y: parseIso(match[2], sign),
                  M: parseIso(match[3], sign),
                  w: parseIso(match[4], sign),
                  d: parseIso(match[5], sign),
                  h: parseIso(match[6], sign),
                  m: parseIso(match[7], sign),
                  s: parseIso(match[8], sign),
              };
          } else if (duration == null) {
              // checks for null or undefined
              duration = {};
          } else if (
              typeof duration === 'object' &&
              ('from' in duration || 'to' in duration)
          ) {
              diffRes = momentsDifference(
                  createLocal(duration.from),
                  createLocal(duration.to)
              );

              duration = {};
              duration.ms = diffRes.milliseconds;
              duration.M = diffRes.months;
          }

          ret = new Duration(duration);

          if (isDuration(input) && hasOwnProp(input, '_locale')) {
              ret._locale = input._locale;
          }

          if (isDuration(input) && hasOwnProp(input, '_isValid')) {
              ret._isValid = input._isValid;
          }

          return ret;
      }

      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;

      function parseIso(inp, sign) {
          // We'd normally use ~~inp for this, but unfortunately it also
          // converts floats to ints.
          // inp may be undefined, so careful calling replace on it.
          var res = inp && parseFloat(inp.replace(',', '.'));
          // apply sign while we're at it
          return (isNaN(res) ? 0 : res) * sign;
      }

      function positiveMomentsDifference(base, other) {
          var res = {};

          res.months =
              other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, 'M').isAfter(other)) {
              --res.months;
          }

          res.milliseconds = +other - +base.clone().add(res.months, 'M');

          return res;
      }

      function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
              return { milliseconds: 0, months: 0 };
          }

          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
              res = positiveMomentsDifference(base, other);
          } else {
              res = positiveMomentsDifference(other, base);
              res.milliseconds = -res.milliseconds;
              res.months = -res.months;
          }

          return res;
      }

      // TODO: remove 'name' arg after deprecation is removed
      function createAdder(direction, name) {
          return function (val, period) {
              var dur, tmp;
              //invert the arguments, but complain about it
              if (period !== null && !isNaN(+period)) {
                  deprecateSimple(
                      name,
                      'moment().' +
                          name +
                          '(period, number) is deprecated. Please use moment().' +
                          name +
                          '(number, period). ' +
                          'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                  );
                  tmp = val;
                  val = period;
                  period = tmp;
              }

              dur = createDuration(val, period);
              addSubtract(this, dur, direction);
              return this;
          };
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds = duration._milliseconds,
              days = absRound(duration._days),
              months = absRound(duration._months);

          if (!mom.isValid()) {
              // No op
              return;
          }

          updateOffset = updateOffset == null ? true : updateOffset;

          if (months) {
              setMonth(mom, get(mom, 'Month') + months * isAdding);
          }
          if (days) {
              set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
          }
          if (milliseconds) {
              mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
          }
          if (updateOffset) {
              hooks.updateOffset(mom, days || months);
          }
      }

      var add = createAdder(1, 'add'),
          subtract = createAdder(-1, 'subtract');

      function isString(input) {
          return typeof input === 'string' || input instanceof String;
      }

      // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
      function isMomentInput(input) {
          return (
              isMoment(input) ||
              isDate(input) ||
              isString(input) ||
              isNumber(input) ||
              isNumberOrStringArray(input) ||
              isMomentInputObject(input) ||
              input === null ||
              input === undefined
          );
      }

      function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = [
                  'years',
                  'year',
                  'y',
                  'months',
                  'month',
                  'M',
                  'days',
                  'day',
                  'd',
                  'dates',
                  'date',
                  'D',
                  'hours',
                  'hour',
                  'h',
                  'minutes',
                  'minute',
                  'm',
                  'seconds',
                  'second',
                  's',
                  'milliseconds',
                  'millisecond',
                  'ms',
              ],
              i,
              property,
              propertyLen = properties.length;

          for (i = 0; i < propertyLen; i += 1) {
              property = properties[i];
              propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
      }

      function isNumberOrStringArray(input) {
          var arrayTest = isArray(input),
              dataTypeTest = false;
          if (arrayTest) {
              dataTypeTest =
                  input.filter(function (item) {
                      return !isNumber(item) && isString(input);
                  }).length === 0;
          }
          return arrayTest && dataTypeTest;
      }

      function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = [
                  'sameDay',
                  'nextDay',
                  'lastDay',
                  'nextWeek',
                  'lastWeek',
                  'sameElse',
              ],
              i,
              property;

          for (i = 0; i < properties.length; i += 1) {
              property = properties[i];
              propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
      }

      function getCalendarFormat(myMoment, now) {
          var diff = myMoment.diff(now, 'days', true);
          return diff < -6
              ? 'sameElse'
              : diff < -1
              ? 'lastWeek'
              : diff < 0
              ? 'lastDay'
              : diff < 1
              ? 'sameDay'
              : diff < 2
              ? 'nextDay'
              : diff < 7
              ? 'nextWeek'
              : 'sameElse';
      }

      function calendar$1(time, formats) {
          // Support for single parameter, formats only overload to the calendar function
          if (arguments.length === 1) {
              if (!arguments[0]) {
                  time = undefined;
                  formats = undefined;
              } else if (isMomentInput(arguments[0])) {
                  time = arguments[0];
                  formats = undefined;
              } else if (isCalendarSpec(arguments[0])) {
                  formats = arguments[0];
                  time = undefined;
              }
          }
          // We want to compare the start of today, vs this.
          // Getting start-of-today depends on whether we're local/utc/offset or not.
          var now = time || createLocal(),
              sod = cloneWithOffset(now, this).startOf('day'),
              format = hooks.calendarFormat(this, sod) || 'sameElse',
              output =
                  formats &&
                  (isFunction(formats[format])
                      ? formats[format].call(this, now)
                      : formats[format]);

          return this.format(
              output || this.localeData().calendar(format, this, createLocal(now))
          );
      }

      function clone() {
          return new Moment(this);
      }

      function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() > localInput.valueOf();
          } else {
              return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
      }

      function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() < localInput.valueOf();
          } else {
              return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
      }

      function isBetween(from, to, units, inclusivity) {
          var localFrom = isMoment(from) ? from : createLocal(from),
              localTo = isMoment(to) ? to : createLocal(to);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
              return false;
          }
          inclusivity = inclusivity || '()';
          return (
              (inclusivity[0] === '('
                  ? this.isAfter(localFrom, units)
                  : !this.isBefore(localFrom, units)) &&
              (inclusivity[1] === ')'
                  ? this.isBefore(localTo, units)
                  : !this.isAfter(localTo, units))
          );
      }

      function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input),
              inputMs;
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() === localInput.valueOf();
          } else {
              inputMs = localInput.valueOf();
              return (
                  this.clone().startOf(units).valueOf() <= inputMs &&
                  inputMs <= this.clone().endOf(units).valueOf()
              );
          }
      }

      function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
      }

      function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
      }

      function diff(input, units, asFloat) {
          var that, zoneDelta, output;

          if (!this.isValid()) {
              return NaN;
          }

          that = cloneWithOffset(input, this);

          if (!that.isValid()) {
              return NaN;
          }

          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

          units = normalizeUnits(units);

          switch (units) {
              case 'year':
                  output = monthDiff(this, that) / 12;
                  break;
              case 'month':
                  output = monthDiff(this, that);
                  break;
              case 'quarter':
                  output = monthDiff(this, that) / 3;
                  break;
              case 'second':
                  output = (this - that) / 1e3;
                  break; // 1000
              case 'minute':
                  output = (this - that) / 6e4;
                  break; // 1000 * 60
              case 'hour':
                  output = (this - that) / 36e5;
                  break; // 1000 * 60 * 60
              case 'day':
                  output = (this - that - zoneDelta) / 864e5;
                  break; // 1000 * 60 * 60 * 24, negate dst
              case 'week':
                  output = (this - that - zoneDelta) / 6048e5;
                  break; // 1000 * 60 * 60 * 24 * 7, negate dst
              default:
                  output = this - that;
          }

          return asFloat ? output : absFloor(output);
      }

      function monthDiff(a, b) {
          if (a.date() < b.date()) {
              // end-of-month calculations work correct when the start month has more
              // days than the end month.
              return -monthDiff(b, a);
          }
          // difference in months
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
              // b is in (anchor - 1 month, anchor + 1 month)
              anchor = a.clone().add(wholeMonthDiff, 'months'),
              anchor2,
              adjust;

          if (b - anchor < 0) {
              anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
              // linear across the month
              adjust = (b - anchor) / (anchor - anchor2);
          } else {
              anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
              // linear across the month
              adjust = (b - anchor) / (anchor2 - anchor);
          }

          //check for negative zero, return zero if negative zero
          return -(wholeMonthDiff + adjust) || 0;
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

      function toString() {
          return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }

      function toISOString(keepOffset) {
          if (!this.isValid()) {
              return null;
          }
          var utc = keepOffset !== true,
              m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
              return formatMoment(
                  m,
                  utc
                      ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                      : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
              );
          }
          if (isFunction(Date.prototype.toISOString)) {
              // native implementation is ~50x faster, use it when we can
              if (utc) {
                  return this.toDate().toISOString();
              } else {
                  return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                      .toISOString()
                      .replace('Z', formatMoment(m, 'Z'));
              }
          }
          return formatMoment(
              m,
              utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
          );
      }

      /**
       * Return a human readable representation of a moment that can
       * also be evaluated to get a new moment which is the same
       *
       * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
       */
      function inspect() {
          if (!this.isValid()) {
              return 'moment.invalid(/* ' + this._i + ' */)';
          }
          var func = 'moment',
              zone = '',
              prefix,
              year,
              datetime,
              suffix;
          if (!this.isLocal()) {
              func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
              zone = 'Z';
          }
          prefix = '[' + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
          datetime = '-MM-DD[T]HH:mm:ss.SSS';
          suffix = zone + '[")]';

          return this.format(prefix + year + datetime + suffix);
      }

      function format(inputString) {
          if (!inputString) {
              inputString = this.isUtc()
                  ? hooks.defaultFormatUtc
                  : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
      }

      function from(time, withoutSuffix) {
          if (
              this.isValid() &&
              ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
          ) {
              return createDuration({ to: this, from: time })
                  .locale(this.locale())
                  .humanize(!withoutSuffix);
          } else {
              return this.localeData().invalidDate();
          }
      }

      function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
      }

      function to(time, withoutSuffix) {
          if (
              this.isValid() &&
              ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
          ) {
              return createDuration({ from: this, to: time })
                  .locale(this.locale())
                  .humanize(!withoutSuffix);
          } else {
              return this.localeData().invalidDate();
          }
      }

      function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
      }

      // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.
      function locale(key) {
          var newLocaleData;

          if (key === undefined) {
              return this._locale._abbr;
          } else {
              newLocaleData = getLocale(key);
              if (newLocaleData != null) {
                  this._locale = newLocaleData;
              }
              return this;
          }
      }

      var lang = deprecate(
          'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
          function (key) {
              if (key === undefined) {
                  return this.localeData();
              } else {
                  return this.locale(key);
              }
          }
      );

      function localeData() {
          return this._locale;
      }

      var MS_PER_SECOND = 1000,
          MS_PER_MINUTE = 60 * MS_PER_SECOND,
          MS_PER_HOUR = 60 * MS_PER_MINUTE,
          MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

      // actual modulo - handles negative numbers (for dates before 1970):
      function mod$1(dividend, divisor) {
          return ((dividend % divisor) + divisor) % divisor;
      }

      function localStartOfDate(y, m, d) {
          // the date constructor remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
              return new Date(y, m, d).valueOf();
          }
      }

      function utcStartOfDate(y, m, d) {
          // Date.UTC remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
              return Date.UTC(y, m, d);
          }
      }

      function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === undefined || units === 'millisecond' || !this.isValid()) {
              return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
              case 'year':
                  time = startOfDate(this.year(), 0, 1);
                  break;
              case 'quarter':
                  time = startOfDate(
                      this.year(),
                      this.month() - (this.month() % 3),
                      1
                  );
                  break;
              case 'month':
                  time = startOfDate(this.year(), this.month(), 1);
                  break;
              case 'week':
                  time = startOfDate(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday()
                  );
                  break;
              case 'isoWeek':
                  time = startOfDate(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1)
                  );
                  break;
              case 'day':
              case 'date':
                  time = startOfDate(this.year(), this.month(), this.date());
                  break;
              case 'hour':
                  time = this._d.valueOf();
                  time -= mod$1(
                      time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                      MS_PER_HOUR
                  );
                  break;
              case 'minute':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_MINUTE);
                  break;
              case 'second':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_SECOND);
                  break;
          }

          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
      }

      function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === undefined || units === 'millisecond' || !this.isValid()) {
              return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
              case 'year':
                  time = startOfDate(this.year() + 1, 0, 1) - 1;
                  break;
              case 'quarter':
                  time =
                      startOfDate(
                          this.year(),
                          this.month() - (this.month() % 3) + 3,
                          1
                      ) - 1;
                  break;
              case 'month':
                  time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                  break;
              case 'week':
                  time =
                      startOfDate(
                          this.year(),
                          this.month(),
                          this.date() - this.weekday() + 7
                      ) - 1;
                  break;
              case 'isoWeek':
                  time =
                      startOfDate(
                          this.year(),
                          this.month(),
                          this.date() - (this.isoWeekday() - 1) + 7
                      ) - 1;
                  break;
              case 'day':
              case 'date':
                  time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                  break;
              case 'hour':
                  time = this._d.valueOf();
                  time +=
                      MS_PER_HOUR -
                      mod$1(
                          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                          MS_PER_HOUR
                      ) -
                      1;
                  break;
              case 'minute':
                  time = this._d.valueOf();
                  time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                  break;
              case 'second':
                  time = this._d.valueOf();
                  time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                  break;
          }

          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
      }

      function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 60000;
      }

      function unix() {
          return Math.floor(this.valueOf() / 1000);
      }

      function toDate() {
          return new Date(this.valueOf());
      }

      function toArray() {
          var m = this;
          return [
              m.year(),
              m.month(),
              m.date(),
              m.hour(),
              m.minute(),
              m.second(),
              m.millisecond(),
          ];
      }

      function toObject() {
          var m = this;
          return {
              years: m.year(),
              months: m.month(),
              date: m.date(),
              hours: m.hours(),
              minutes: m.minutes(),
              seconds: m.seconds(),
              milliseconds: m.milliseconds(),
          };
      }

      function toJSON() {
          // new Date(NaN).toJSON() === null
          return this.isValid() ? this.toISOString() : null;
      }

      function isValid$2() {
          return isValid(this);
      }

      function parsingFlags() {
          return extend({}, getParsingFlags(this));
      }

      function invalidAt() {
          return getParsingFlags(this).overflow;
      }

      function creationData() {
          return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
          };
      }

      addFormatToken('N', 0, 0, 'eraAbbr');
      addFormatToken('NN', 0, 0, 'eraAbbr');
      addFormatToken('NNN', 0, 0, 'eraAbbr');
      addFormatToken('NNNN', 0, 0, 'eraName');
      addFormatToken('NNNNN', 0, 0, 'eraNarrow');

      addFormatToken('y', ['y', 1], 'yo', 'eraYear');
      addFormatToken('y', ['yy', 2], 0, 'eraYear');
      addFormatToken('y', ['yyy', 3], 0, 'eraYear');
      addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

      addRegexToken('N', matchEraAbbr);
      addRegexToken('NN', matchEraAbbr);
      addRegexToken('NNN', matchEraAbbr);
      addRegexToken('NNNN', matchEraName);
      addRegexToken('NNNNN', matchEraNarrow);

      addParseToken(
          ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
          function (input, array, config, token) {
              var era = config._locale.erasParse(input, token, config._strict);
              if (era) {
                  getParsingFlags(config).era = era;
              } else {
                  getParsingFlags(config).invalidEra = input;
              }
          }
      );

      addRegexToken('y', matchUnsigned);
      addRegexToken('yy', matchUnsigned);
      addRegexToken('yyy', matchUnsigned);
      addRegexToken('yyyy', matchUnsigned);
      addRegexToken('yo', matchEraYearOrdinal);

      addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
      addParseToken(['yo'], function (input, array, config, token) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
              match = input.match(config._locale._eraYearOrdinalRegex);
          }

          if (config._locale.eraYearOrdinalParse) {
              array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
              array[YEAR] = parseInt(input, 10);
          }
      });

      function localeEras(m, format) {
          var i,
              l,
              date,
              eras = this._eras || getLocale('en')._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
              switch (typeof eras[i].since) {
                  case 'string':
                      // truncate time
                      date = hooks(eras[i].since).startOf('day');
                      eras[i].since = date.valueOf();
                      break;
              }

              switch (typeof eras[i].until) {
                  case 'undefined':
                      eras[i].until = +Infinity;
                      break;
                  case 'string':
                      // truncate time
                      date = hooks(eras[i].until).startOf('day').valueOf();
                      eras[i].until = date.valueOf();
                      break;
              }
          }
          return eras;
      }

      function localeErasParse(eraName, format, strict) {
          var i,
              l,
              eras = this.eras(),
              name,
              abbr,
              narrow;
          eraName = eraName.toUpperCase();

          for (i = 0, l = eras.length; i < l; ++i) {
              name = eras[i].name.toUpperCase();
              abbr = eras[i].abbr.toUpperCase();
              narrow = eras[i].narrow.toUpperCase();

              if (strict) {
                  switch (format) {
                      case 'N':
                      case 'NN':
                      case 'NNN':
                          if (abbr === eraName) {
                              return eras[i];
                          }
                          break;

                      case 'NNNN':
                          if (name === eraName) {
                              return eras[i];
                          }
                          break;

                      case 'NNNNN':
                          if (narrow === eraName) {
                              return eras[i];
                          }
                          break;
                  }
              } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                  return eras[i];
              }
          }
      }

      function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? +1 : -1;
          if (year === undefined) {
              return hooks(era.since).year();
          } else {
              return hooks(era.since).year() + (year - era.offset) * dir;
          }
      }

      function getEraName() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].name;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].name;
              }
          }

          return '';
      }

      function getEraNarrow() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].narrow;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].narrow;
              }
          }

          return '';
      }

      function getEraAbbr() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].abbr;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].abbr;
              }
          }

          return '';
      }

      function getEraYear() {
          var i,
              l,
              dir,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              dir = eras[i].since <= eras[i].until ? +1 : -1;

              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (
                  (eras[i].since <= val && val <= eras[i].until) ||
                  (eras[i].until <= val && val <= eras[i].since)
              ) {
                  return (
                      (this.year() - hooks(eras[i].since).year()) * dir +
                      eras[i].offset
                  );
              }
          }

          return this.year();
      }

      function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNameRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
      }

      function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, '_erasAbbrRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }

      function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNarrowRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }

      function matchEraAbbr(isStrict, locale) {
          return locale.erasAbbrRegex(isStrict);
      }

      function matchEraName(isStrict, locale) {
          return locale.erasNameRegex(isStrict);
      }

      function matchEraNarrow(isStrict, locale) {
          return locale.erasNarrowRegex(isStrict);
      }

      function matchEraYearOrdinal(isStrict, locale) {
          return locale._eraYearOrdinalRegex || matchUnsigned;
      }

      function computeErasParse() {
          var abbrPieces = [],
              namePieces = [],
              narrowPieces = [],
              mixedPieces = [],
              i,
              l,
              eras = this.eras();

          for (i = 0, l = eras.length; i < l; ++i) {
              namePieces.push(regexEscape(eras[i].name));
              abbrPieces.push(regexEscape(eras[i].abbr));
              narrowPieces.push(regexEscape(eras[i].narrow));

              mixedPieces.push(regexEscape(eras[i].name));
              mixedPieces.push(regexEscape(eras[i].abbr));
              mixedPieces.push(regexEscape(eras[i].narrow));
          }

          this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
          this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
          this._erasNarrowRegex = new RegExp(
              '^(' + narrowPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      addFormatToken(0, ['gg', 2], 0, function () {
          return this.weekYear() % 100;
      });

      addFormatToken(0, ['GG', 2], 0, function () {
          return this.isoWeekYear() % 100;
      });

      function addWeekYearFormatToken(token, getter) {
          addFormatToken(0, [token, token.length], 0, getter);
      }

      addWeekYearFormatToken('gggg', 'weekYear');
      addWeekYearFormatToken('ggggg', 'weekYear');
      addWeekYearFormatToken('GGGG', 'isoWeekYear');
      addWeekYearFormatToken('GGGGG', 'isoWeekYear');

      // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG');

      // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1);

      // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);

      addWeekParseToken(
          ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
          function (input, week, config, token) {
              week[token.substr(0, 2)] = toInt(input);
          }
      );

      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
          week[token] = hooks.parseTwoDigitYear(input);
      });

      // MOMENTS

      function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(
              this,
              input,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
          );
      }

      function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(
              this,
              input,
              this.isoWeek(),
              this.isoWeekday(),
              1,
              4
          );
      }

      function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
      }

      function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
      }

      function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }

      function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
              return weekOfYear(this, dow, doy).year;
          } else {
              weeksTarget = weeksInYear(input, dow, doy);
              if (week > weeksTarget) {
                  week = weeksTarget;
              }
              return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
              date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
      }

      // FORMATTING

      addFormatToken('Q', 0, 'Qo', 'quarter');

      // ALIASES

      addUnitAlias('quarter', 'Q');

      // PRIORITY

      addUnitPriority('quarter', 7);

      // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q', function (input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
      });

      // MOMENTS

      function getSetQuarter(input) {
          return input == null
              ? Math.ceil((this.month() + 1) / 3)
              : this.month((input - 1) * 3 + (this.month() % 3));
      }

      // FORMATTING

      addFormatToken('D', ['DD', 2], 'Do', 'date');

      // ALIASES

      addUnitAlias('date', 'D');

      // PRIORITY
      addUnitPriority('date', 9);

      // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do', function (isStrict, locale) {
          // TODO: Remove "ordinalParse" fallback in next major release.
          return isStrict
              ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
              : locale._dayOfMonthOrdinalParseLenient;
      });

      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do', function (input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
      });

      // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true);

      // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

      // ALIASES

      addUnitAlias('dayOfYear', 'DDD');

      // PRIORITY
      addUnitPriority('dayOfYear', 4);

      // PARSING

      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
          config._dayOfYear = toInt(input);
      });

      // HELPERS

      // MOMENTS

      function getSetDayOfYear(input) {
          var dayOfYear =
              Math.round(
                  (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
              ) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
      }

      // FORMATTING

      addFormatToken('m', ['mm', 2], 0, 'minute');

      // ALIASES

      addUnitAlias('minute', 'm');

      // PRIORITY

      addUnitPriority('minute', 14);

      // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE);

      // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false);

      // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second');

      // ALIASES

      addUnitAlias('second', 's');

      // PRIORITY

      addUnitPriority('second', 15);

      // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND);

      // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false);

      // FORMATTING

      addFormatToken('S', 0, 0, function () {
          return ~~(this.millisecond() / 100);
      });

      addFormatToken(0, ['SS', 2], 0, function () {
          return ~~(this.millisecond() / 10);
      });

      addFormatToken(0, ['SSS', 3], 0, 'millisecond');
      addFormatToken(0, ['SSSS', 4], 0, function () {
          return this.millisecond() * 10;
      });
      addFormatToken(0, ['SSSSS', 5], 0, function () {
          return this.millisecond() * 100;
      });
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
          return this.millisecond() * 1000;
      });
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
          return this.millisecond() * 10000;
      });
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
          return this.millisecond() * 100000;
      });
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
          return this.millisecond() * 1000000;
      });

      // ALIASES

      addUnitAlias('millisecond', 'ms');

      // PRIORITY

      addUnitPriority('millisecond', 16);

      // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);

      var token, getSetMillisecond;
      for (token = 'SSSS'; token.length <= 9; token += 'S') {
          addRegexToken(token, matchUnsigned);
      }

      function parseMs(input, array) {
          array[MILLISECOND] = toInt(('0.' + input) * 1000);
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
          addParseToken(token, parseMs);
      }

      getSetMillisecond = makeGetSet('Milliseconds', false);

      // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr');
      addFormatToken('zz', 0, 0, 'zoneName');

      // MOMENTS

      function getZoneAbbr() {
          return this._isUTC ? 'UTC' : '';
      }

      function getZoneName() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
      }

      var proto = Moment.prototype;

      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== 'undefined' && Symbol.for != null) {
          proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
              return 'Moment<' + this.format() + '>';
          };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate(
          'dates accessor is deprecated. Use date instead.',
          getSetDayOfMonth
      );
      proto.months = deprecate(
          'months accessor is deprecated. Use month instead',
          getSetMonth
      );
      proto.years = deprecate(
          'years accessor is deprecated. Use year instead',
          getSetYear
      );
      proto.zone = deprecate(
          'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
          getSetZone
      );
      proto.isDSTShifted = deprecate(
          'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
          isDaylightSavingTimeShifted
      );

      function createUnix(input) {
          return createLocal(input * 1000);
      }

      function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
      }

      function preParsePostFormat(string) {
          return string;
      }

      var proto$1 = Locale.prototype;

      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;

      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;

      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;

      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;

      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;

      function get$1(format, index, field, setter) {
          var locale = getLocale(),
              utc = createUTC().set(setter, index);
          return locale[field](utc, format);
      }

      function listMonthsImpl(format, index, field) {
          if (isNumber(format)) {
              index = format;
              format = undefined;
          }

          format = format || '';

          if (index != null) {
              return get$1(format, index, field, 'month');
          }

          var i,
              out = [];
          for (i = 0; i < 12; i++) {
              out[i] = get$1(format, i, field, 'month');
          }
          return out;
      }

      // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)
      function listWeekdaysImpl(localeSorted, format, index, field) {
          if (typeof localeSorted === 'boolean') {
              if (isNumber(format)) {
                  index = format;
                  format = undefined;
              }

              format = format || '';
          } else {
              format = localeSorted;
              index = format;
              localeSorted = false;

              if (isNumber(format)) {
                  index = format;
                  format = undefined;
              }

              format = format || '';
          }

          var locale = getLocale(),
              shift = localeSorted ? locale._week.dow : 0,
              i,
              out = [];

          if (index != null) {
              return get$1(format, (index + shift) % 7, field, 'day');
          }

          for (i = 0; i < 7; i++) {
              out[i] = get$1(format, (i + shift) % 7, field, 'day');
          }
          return out;
      }

      function listMonths(format, index) {
          return listMonthsImpl(format, index, 'months');
      }

      function listMonthsShort(format, index) {
          return listMonthsImpl(format, index, 'monthsShort');
      }

      function listWeekdays(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
      }

      function listWeekdaysShort(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
      }

      function listWeekdaysMin(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
      }

      getSetGlobalLocale('en', {
          eras: [
              {
                  since: '0001-01-01',
                  until: +Infinity,
                  offset: 1,
                  name: 'Anno Domini',
                  narrow: 'AD',
                  abbr: 'AD',
              },
              {
                  since: '0000-12-31',
                  until: -Infinity,
                  offset: 1,
                  name: 'Before Christ',
                  narrow: 'BC',
                  abbr: 'BC',
              },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (number) {
              var b = number % 10,
                  output =
                      toInt((number % 100) / 10) === 1
                          ? 'th'
                          : b === 1
                          ? 'st'
                          : b === 2
                          ? 'nd'
                          : b === 3
                          ? 'rd'
                          : 'th';
              return number + output;
          },
      });

      // Side effect imports

      hooks.lang = deprecate(
          'moment.lang is deprecated. Use moment.locale instead.',
          getSetGlobalLocale
      );
      hooks.langData = deprecate(
          'moment.langData is deprecated. Use moment.localeData instead.',
          getLocale
      );

      var mathAbs = Math.abs;

      function abs() {
          var data = this._data;

          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);

          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);

          return this;
      }

      function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);

          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;

          return duration._bubble();
      }

      // supports only 2.0-style add(1, 's') or add(duration)
      function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
      }

      // supports only 2.0-style subtract(1, 's') or subtract(duration)
      function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
      }

      function absCeil(number) {
          if (number < 0) {
              return Math.floor(number);
          } else {
              return Math.ceil(number);
          }
      }

      function bubble() {
          var milliseconds = this._milliseconds,
              days = this._days,
              months = this._months,
              data = this._data,
              seconds,
              minutes,
              hours,
              years,
              monthsFromDays;

          // if we have a mix of positive and negative values, bubble down first
          // check: https://github.com/moment/moment/issues/2166
          if (
              !(
                  (milliseconds >= 0 && days >= 0 && months >= 0) ||
                  (milliseconds <= 0 && days <= 0 && months <= 0)
              )
          ) {
              milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
              days = 0;
              months = 0;
          }

          // The following code bubbles up values, see the tests for
          // examples of what that means.
          data.milliseconds = milliseconds % 1000;

          seconds = absFloor(milliseconds / 1000);
          data.seconds = seconds % 60;

          minutes = absFloor(seconds / 60);
          data.minutes = minutes % 60;

          hours = absFloor(minutes / 60);
          data.hours = hours % 24;

          days += absFloor(hours / 24);

          // convert days to months
          monthsFromDays = absFloor(daysToMonths(days));
          months += monthsFromDays;
          days -= absCeil(monthsToDays(monthsFromDays));

          // 12 months -> 1 year
          years = absFloor(months / 12);
          months %= 12;

          data.days = days;
          data.months = months;
          data.years = years;

          return this;
      }

      function daysToMonths(days) {
          // 400 years have 146097 days (taking into account leap year rules)
          // 400 years have 12 months === 4800
          return (days * 4800) / 146097;
      }

      function monthsToDays(months) {
          // the reverse of daysToMonths
          return (months * 146097) / 4800;
      }

      function as(units) {
          if (!this.isValid()) {
              return NaN;
          }
          var days,
              months,
              milliseconds = this._milliseconds;

          units = normalizeUnits(units);

          if (units === 'month' || units === 'quarter' || units === 'year') {
              days = this._days + milliseconds / 864e5;
              months = this._months + daysToMonths(days);
              switch (units) {
                  case 'month':
                      return months;
                  case 'quarter':
                      return months / 3;
                  case 'year':
                      return months / 12;
              }
          } else {
              // handle milliseconds separately because of floating point math errors (issue #1867)
              days = this._days + Math.round(monthsToDays(this._months));
              switch (units) {
                  case 'week':
                      return days / 7 + milliseconds / 6048e5;
                  case 'day':
                      return days + milliseconds / 864e5;
                  case 'hour':
                      return days * 24 + milliseconds / 36e5;
                  case 'minute':
                      return days * 1440 + milliseconds / 6e4;
                  case 'second':
                      return days * 86400 + milliseconds / 1000;
                  // Math.floor prevents floating point math errors here
                  case 'millisecond':
                      return Math.floor(days * 864e5) + milliseconds;
                  default:
                      throw new Error('Unknown unit ' + units);
              }
          }
      }

      // TODO: Use this.as('ms')?
      function valueOf$1() {
          if (!this.isValid()) {
              return NaN;
          }
          return (
              this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6
          );
      }

      function makeAs(alias) {
          return function () {
              return this.as(alias);
          };
      }

      var asMilliseconds = makeAs('ms'),
          asSeconds = makeAs('s'),
          asMinutes = makeAs('m'),
          asHours = makeAs('h'),
          asDays = makeAs('d'),
          asWeeks = makeAs('w'),
          asMonths = makeAs('M'),
          asQuarters = makeAs('Q'),
          asYears = makeAs('y');

      function clone$1() {
          return createDuration(this);
      }

      function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + 's']() : NaN;
      }

      function makeGetter(name) {
          return function () {
              return this.isValid() ? this._data[name] : NaN;
          };
      }

      var milliseconds = makeGetter('milliseconds'),
          seconds = makeGetter('seconds'),
          minutes = makeGetter('minutes'),
          hours = makeGetter('hours'),
          days = makeGetter('days'),
          months = makeGetter('months'),
          years = makeGetter('years');

      function weeks() {
          return absFloor(this.days() / 7);
      }

      var round = Math.round,
          thresholds = {
              ss: 44, // a few seconds to seconds
              s: 45, // seconds to minute
              m: 45, // minutes to hour
              h: 22, // hours to day
              d: 26, // days to month/week
              w: null, // weeks to month
              M: 11, // months to year
          };

      // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
          return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }

      function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
          var duration = createDuration(posNegDuration).abs(),
              seconds = round(duration.as('s')),
              minutes = round(duration.as('m')),
              hours = round(duration.as('h')),
              days = round(duration.as('d')),
              months = round(duration.as('M')),
              weeks = round(duration.as('w')),
              years = round(duration.as('y')),
              a =
                  (seconds <= thresholds.ss && ['s', seconds]) ||
                  (seconds < thresholds.s && ['ss', seconds]) ||
                  (minutes <= 1 && ['m']) ||
                  (minutes < thresholds.m && ['mm', minutes]) ||
                  (hours <= 1 && ['h']) ||
                  (hours < thresholds.h && ['hh', hours]) ||
                  (days <= 1 && ['d']) ||
                  (days < thresholds.d && ['dd', days]);

          if (thresholds.w != null) {
              a =
                  a ||
                  (weeks <= 1 && ['w']) ||
                  (weeks < thresholds.w && ['ww', weeks]);
          }
          a = a ||
              (months <= 1 && ['M']) ||
              (months < thresholds.M && ['MM', months]) ||
              (years <= 1 && ['y']) || ['yy', years];

          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale;
          return substituteTimeAgo.apply(null, a);
      }

      // This function allows you to set the rounding function for relative time strings
      function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === undefined) {
              return round;
          }
          if (typeof roundingFunction === 'function') {
              round = roundingFunction;
              return true;
          }
          return false;
      }

      // This function allows you to set a threshold for relative time strings
      function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === undefined) {
              return false;
          }
          if (limit === undefined) {
              return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === 's') {
              thresholds.ss = limit - 1;
          }
          return true;
      }

      function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
              return this.localeData().invalidDate();
          }

          var withSuffix = false,
              th = thresholds,
              locale,
              output;

          if (typeof argWithSuffix === 'object') {
              argThresholds = argWithSuffix;
              argWithSuffix = false;
          }
          if (typeof argWithSuffix === 'boolean') {
              withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === 'object') {
              th = Object.assign({}, thresholds, argThresholds);
              if (argThresholds.s != null && argThresholds.ss == null) {
                  th.ss = argThresholds.s - 1;
              }
          }

          locale = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale);

          if (withSuffix) {
              output = locale.pastFuture(+this, output);
          }

          return locale.postformat(output);
      }

      var abs$1 = Math.abs;

      function sign(x) {
          return (x > 0) - (x < 0) || +x;
      }

      function toISOString$1() {
          // for ISO strings we do not use the normal bubbling rules:
          //  * milliseconds bubble up until they become hours
          //  * days do not bubble at all
          //  * months bubble up until they become years
          // This is because there is no context-free conversion between hours and days
          // (think of clock changes)
          // and also not between days and months (28-31 days per month)
          if (!this.isValid()) {
              return this.localeData().invalidDate();
          }

          var seconds = abs$1(this._milliseconds) / 1000,
              days = abs$1(this._days),
              months = abs$1(this._months),
              minutes,
              hours,
              years,
              s,
              total = this.asSeconds(),
              totalSign,
              ymSign,
              daysSign,
              hmsSign;

          if (!total) {
              // this is the same as C#'s (Noda) and python (isodate)...
              // but not other JS (goog.date)
              return 'P0D';
          }

          // 3600 seconds -> 60 minutes -> 1 hour
          minutes = absFloor(seconds / 60);
          hours = absFloor(minutes / 60);
          seconds %= 60;
          minutes %= 60;

          // 12 months -> 1 year
          years = absFloor(months / 12);
          months %= 12;

          // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
          s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

          totalSign = total < 0 ? '-' : '';
          ymSign = sign(this._months) !== sign(total) ? '-' : '';
          daysSign = sign(this._days) !== sign(total) ? '-' : '';
          hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

          return (
              totalSign +
              'P' +
              (years ? ymSign + years + 'Y' : '') +
              (months ? ymSign + months + 'M' : '') +
              (days ? daysSign + days + 'D' : '') +
              (hours || minutes || seconds ? 'T' : '') +
              (hours ? hmsSign + hours + 'H' : '') +
              (minutes ? hmsSign + minutes + 'M' : '') +
              (seconds ? hmsSign + s + 'S' : '')
          );
      }

      var proto$2 = Duration.prototype;

      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;

      proto$2.toIsoString = deprecate(
          'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
          toISOString$1
      );
      proto$2.lang = lang;

      // FORMATTING

      addFormatToken('X', 0, 0, 'unix');
      addFormatToken('x', 0, 0, 'valueOf');

      // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X', function (input, array, config) {
          config._d = new Date(parseFloat(input) * 1000);
      });
      addParseToken('x', function (input, array, config) {
          config._d = new Date(toInt(input));
      });

      //! moment.js

      hooks.version = '2.29.4';

      setHookCallback(createLocal);

      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;

      // currently HTML5 input type only supports 24-hour formats
      hooks.HTML5_FMT = {
          DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
          DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
          DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
          DATE: 'YYYY-MM-DD', // <input type="date" />
          TIME: 'HH:mm', // <input type="time" />
          TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
          TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
          WEEK: 'GGGG-[W]WW', // <input type="week" />
          MONTH: 'YYYY-MM', // <input type="month" />
      };

      return hooks;

  })));
  });

  /**
   * @name getYear
   * @category Year Helpers
   * @summary Get the year of the given date.
   *
   * @description
   * Get the year of the given date.
   *
   * @param {Date|Number} date - the given date
   * @returns {Number} the year
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Which year is 2 July 2014?
   * const result = getYear(new Date(2014, 6, 2))
   * //=> 2014
   */

  function getYear(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getFullYear();
  }

  var defaultModifiersClassNames$2 = {
    today: '-today',
    outside: '-outside',
    wide: '-wide',
    disabled: '-disabled',
    selected: '-selected',
    selectedStart: '-selected-start',
    selectedMiddle: '-selected-middle',
    selectedEnd: '-selected-end'
  };
  var isSameYear = function isSameYear(date, actualDate) {
    return dateFns.getMonth(date) === dateFns.getMonth(actualDate) && dateFns.getYear(date) === dateFns.getYear(actualDate);
  };
  function CalendarYear(_ref) {
    var date = _ref.date,
      height = _ref.height,
      locale = _ref.locale,
      receivedModifiers = _ref.modifiers,
      receivedModifiersClassNames = _ref.modifiersClassNames,
      onClick = _ref.onClick,
      onHover = _ref.onHover,
      showGrid = _ref.showGrid,
      actualDate = _ref.actualDate;
    var yearClassNames = {};
    var modifiers = _objectSpread2({
      today: isSameYear(date, actualDate)
    }, receivedModifiers);
    var modifiersClassNames = _objectSpread2(_objectSpread2({}, defaultModifiersClassNames$2), receivedModifiersClassNames);
    Object.keys(modifiers).forEach(function (name) {
      yearClassNames[modifiersClassNames[name]] = modifiers[name];
    });
    var handleClick = function handleClick(event) {
      onClick(date);
      showGrid();
      event.preventDefault();
    };
    var handleMouseEnter = function handleMouseEnter() {
      onHover(date);
    };
    var handleMouseLeave = function handleMouseLeave() {
      onHover(null);
    };
    return /*#__PURE__*/React__default.createElement("span", {
      className: classnames('nice-dates-month', yearClassNames),
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchEnd: handleClick,
      style: {
        height: height
      }
    }, /*#__PURE__*/React__default.createElement("span", null, dateFns.format(date, 'yyyy', {
      locale: locale
    })));
  }
  CalendarYear.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
    height: propTypes.number.isRequired,
    locale: propTypes.object.isRequired,
    modifiers: propTypes.objectOf(propTypes.bool),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    onHover: propTypes.func,
    onClick: propTypes.func,
    showGrid: propTypes.func,
    actualDate: propTypes.instanceOf(Date)
  };
  CalendarYear.defaultProps = {
    modifiers: {},
    onHover: function onHover() {},
    onClick: function onClick() {}
  };

  var computeModifiers$2 = function computeModifiers(modifiers, date) {
    var computedModifiers = {};
    Object.keys(modifiers).map(function (key) {
      computedModifiers[key] = modifiers[key](date);
    });
    return computedModifiers;
  };
  function YearPicker(_ref) {
    var locale = _ref.locale,
      modifiers = _ref.modifiers,
      actualDate = _ref.actualDate,
      modifiersClassNames = _ref.modifiersClassNames,
      onDayHover = _ref.onDayHover,
      onClick = _ref.onClick,
      changeYear = _ref.changeYear,
      transitionDuration = _ref.transitionDuration,
      touchDragEnabled = _ref.touchDragEnabled,
      showGrid = _ref.showGrid;
    var grid = useGrid({
      locale: locale,
      year: getYear(new Date()),
      onMonthChange: onClick,
      transitionDuration: transitionDuration,
      touchDragEnabled: touchDragEnabled
    });
    var cellHeight = grid.cellHeight,
      offset = grid.offset,
      containerElementRef = grid.containerElementRef,
      isWide = grid.isWide,
      origin = grid.origin,
      transition = grid.transition;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      years = _useState2[0],
      setYears = _useState2[1];
    React.useEffect(function () {
      var allYears = dateFns.eachYearOfInterval({
        start: new Date(getYear(new Date()), 0, 1),
        end: new Date(getYear(new Date()) + 11, 0, 1)
      }).map(function (date) {
        return /*#__PURE__*/React__default.createElement(CalendarYear, {
          year: dateFns.lightFormat(date, 'yyyy'),
          date: date,
          actualDate: actualDate,
          height: cellHeight,
          key: dateFns.lightFormat(date, 'yyyy'),
          locale: locale,
          modifiers: _objectSpread2(_objectSpread2({}, computeModifiers$2(modifiers, date)), {}, {
            wide: isWide
          }),
          modifiersClassNames: modifiersClassNames,
          onHover: onDayHover,
          onClick: function onClick() {
            return changeYear(dateFns.lightFormat(date, 'yyyy'));
          },
          showGrid: showGrid
        });
      });
      setYears(allYears);
    }, [actualDate, cellHeight, locale, modifiers, modifiersClassNames, onClick, onDayHover, showGrid, isWide]);
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "nice-dates-grid",
      style: {
        height: cellHeight * 6
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: classnames('nice-dates-grid_container', {
        '-moving': offset,
        '-origin-bottom': origin === ORIGIN_BOTTOM,
        '-origin-top': origin === ORIGIN_TOP,
        '-transition': transition
      }),
      ref: containerElementRef,
      style: {
        transform: "translate3d(0, ".concat(offset, "px, 0)"),
        transitionDuration: "".concat(transitionDuration, "ms")
      }
    }, years)));
  }
  YearPicker.propTypes = {
    locale: propTypes.object.isRequired,
    actualDate: propTypes.instanceOf(Date).isRequired,
    modifiers: propTypes.objectOf(propTypes.func),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    onDayHover: propTypes.func,
    changeYear: propTypes.func,
    transitionDuration: propTypes.number.isRequired,
    touchDragEnabled: propTypes.bool,
    onClick: propTypes.func,
    showGrid: propTypes.func
  };
  YearPicker.defaultProps = {
    modifiers: {},
    transitionDuration: 800,
    touchDragEnabled: true
  };

  function Calendar(_ref) {
    var locale = _ref.locale,
      receivedMonth = _ref.month,
      receivedModifiers = _ref.modifiers,
      modifiersClassNames = _ref.modifiersClassNames,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      onMonthChange = _ref.onMonthChange,
      onDayHover = _ref.onDayHover,
      onDayClick = _ref.onDayClick,
      weekdayFormat = _ref.weekdayFormat,
      touchDragEnabled = _ref.touchDragEnabled,
      monthModifiers = _ref.monthModifiers,
      monthModifiersClassNames = _ref.monthModifiersClassNames;
    var _useControllableState = useControllableState(receivedMonth, onMonthChange, dateFns.startOfMonth(new Date())),
      _useControllableState2 = _slicedToArray(_useControllableState, 2),
      month = _useControllableState2[0],
      setMonth = _useControllableState2[1];
    var _useState = React.useState(moment().year()),
      _useState2 = _slicedToArray(_useState, 2),
      year = _useState2[0],
      setYear = _useState2[1];
    var _useState3 = React.useState("month"),
      _useState4 = _slicedToArray(_useState3, 2),
      time = _useState4[0],
      _setTime = _useState4[1];
    var _useState5 = React.useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1];
    var modifiers = mergeModifiers({
      disabled: function disabled(date) {
        return !isSelectable(date, {
          minimumDate: minimumDate,
          maximumDate: maximumDate
        });
      }
    }, receivedModifiers);
    React.useEffect(function () {
      setYear(moment(month).get('year'));
    }, [month]);
    var handleToggle = React.useCallback(function (e) {
      if (show) {
        setShow(e);
      } else {
        setShow(true);
      }
    }, [show]);
    var changeYear = function changeYear(year) {
      setMonth(moment(month).set('year', year).toDate());
      setYear(parseInt(year));
    };
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(CalendarNavigation, {
      locale: locale,
      minimumDate: minimumDate,
      maximumDate: maximumDate,
      month: month,
      year: year,
      onMonthChange: setMonth,
      onYearChange: setYear,
      showPicker: handleToggle,
      setTime: function setTime(e) {
        return _setTime(e);
      },
      show: show
    }), /*#__PURE__*/React__default.createElement(Popover, {
      open: !show
    }, time === "month" && /*#__PURE__*/React__default.createElement(MonthPicker, {
      locale: locale,
      minimumDate: minimumDate,
      maximumDate: maximumDate,
      modifiers: monthModifiers,
      modifiersClassNames: monthModifiersClassNames,
      actualDate: month,
      onClick: onMonthChange,
      touchDragEnabled: touchDragEnabled,
      onDayHover: onDayHover,
      showGrid: handleToggle
    }), time === "year" && /*#__PURE__*/React__default.createElement(YearPicker, {
      locale: locale,
      minimumDate: minimumDate,
      maximumDate: maximumDate,
      modifiers: monthModifiers,
      modifiersClassNames: monthModifiersClassNames,
      actualDate: month,
      onClick: onMonthChange,
      changeYear: changeYear,
      touchDragEnabled: touchDragEnabled,
      onDayHover: onDayHover,
      showGrid: handleToggle
    })), /*#__PURE__*/React__default.createElement(CalendarWeekHeader, {
      locale: locale,
      weekdayFormat: weekdayFormat
    }), /*#__PURE__*/React__default.createElement(CalendarGrid, {
      locale: locale,
      modifiers: modifiers,
      modifiersClassNames: modifiersClassNames,
      month: month,
      year: year,
      onMonthChange: setMonth,
      onYearChange: setYear,
      onDayHover: onDayHover,
      onDayClick: onDayClick,
      touchDragEnabled: touchDragEnabled
    }));
  }
  Calendar.propTypes = {
    locale: propTypes.object.isRequired,
    minimumDate: propTypes.instanceOf(Date),
    maximumDate: propTypes.instanceOf(Date),
    modifiers: propTypes.objectOf(propTypes.func),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    month: propTypes.instanceOf(Date),
    year: propTypes.number,
    onYearChange: propTypes.func,
    onMonthChange: propTypes.func,
    onDayHover: propTypes.func,
    onDayClick: propTypes.func,
    weekdayFormat: propTypes.string,
    touchDragEnabled: propTypes.bool,
    monthModifiers: propTypes.objectOf(propTypes.func),
    monthModifiersClassNames: propTypes.objectOf(propTypes.string)
  };

  function DatePickerCalendar(_ref) {
    var locale = _ref.locale,
      selectedDate = _ref.date,
      receivedMonth = _ref.month,
      onDateChange = _ref.onDateChange,
      onMonthChange = _ref.onMonthChange,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      receivedModifiers = _ref.modifiers,
      modifiersClassNames = _ref.modifiersClassNames,
      weekdayFormat = _ref.weekdayFormat,
      touchDragEnabled = _ref.touchDragEnabled,
      monthModifiers = _ref.monthModifiers,
      monthModifiersClassNames = _ref.monthModifiersClassNames;
    var isSelected = function isSelected(date) {
      return dateFns.isSameDay(date, selectedDate) && isSelectable(date, {
        minimumDate: minimumDate,
        maximumDate: maximumDate
      });
    };
    var modifiers = mergeModifiers({
      selected: isSelected,
      disabled: isSelected
    }, receivedModifiers);
    var _useControllableState = useControllableState(receivedMonth, onMonthChange, dateFns.startOfMonth(selectedDate || new Date())),
      _useControllableState2 = _slicedToArray(_useControllableState, 2),
      month = _useControllableState2[0],
      setMonth = _useControllableState2[1];
    var handleDateChange = function handleDateChange(date) {
      onDateChange(selectedDate ? setTime(date, selectedDate) : date);
    };
    return /*#__PURE__*/React__default.createElement(Calendar, {
      locale: locale,
      month: month,
      onMonthChange: setMonth,
      onDayClick: handleDateChange,
      minimumDate: minimumDate,
      maximumDate: maximumDate,
      modifiers: modifiers,
      modifiersClassNames: modifiersClassNames,
      weekdayFormat: weekdayFormat,
      touchDragEnabled: touchDragEnabled,
      monthModifiers: monthModifiers,
      monthModifiersClassNames: monthModifiersClassNames
    });
  }
  DatePickerCalendar.propTypes = {
    locale: propTypes.object.isRequired,
    date: propTypes.instanceOf(Date),
    month: propTypes.instanceOf(Date),
    onDateChange: propTypes.func,
    onMonthChange: propTypes.func,
    minimumDate: propTypes.instanceOf(Date),
    maximumDate: propTypes.instanceOf(Date),
    modifiers: propTypes.objectOf(propTypes.func),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    weekdayFormat: propTypes.string,
    touchDragEnabled: propTypes.bool,
    monthModifiers: propTypes.objectOf(propTypes.func),
    monthModifiersClassNames: propTypes.objectOf(propTypes.string)
  };

  function DateRangePickerCalendar(_ref) {
    var locale = _ref.locale,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      focus = _ref.focus,
      receivedMonth = _ref.month,
      onStartDateChange = _ref.onStartDateChange,
      onEndDateChange = _ref.onEndDateChange,
      onFocusChange = _ref.onFocusChange,
      onMonthChange = _ref.onMonthChange,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      minimumLength = _ref.minimumLength,
      maximumLength = _ref.maximumLength,
      receivedModifiers = _ref.modifiers,
      modifiersClassNames = _ref.modifiersClassNames,
      weekdayFormat = _ref.weekdayFormat,
      touchDragEnabled = _ref.touchDragEnabled;
    var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      hoveredDate = _useState2[0],
      setHoveredDate = _useState2[1];
    var _useControllableState = useControllableState(receivedMonth, onMonthChange, dateFns.startOfMonth(startDate || endDate || new Date())),
      _useControllableState2 = _slicedToArray(_useControllableState, 2),
      month = _useControllableState2[0],
      setMonth = _useControllableState2[1];
    var displayedStartDate = focus === START_DATE && !startDate && endDate && hoveredDate && !dateFns.isSameDay(hoveredDate, endDate) ? hoveredDate : dateFns.startOfDay(startDate);
    var displayedEndDate = focus === END_DATE && !endDate && startDate && hoveredDate && !dateFns.isSameDay(hoveredDate, startDate) ? hoveredDate : dateFns.startOfDay(endDate);
    var isStartDate = function isStartDate(date) {
      return dateFns.isSameDay(date, displayedStartDate) && dateFns.isBefore(date, displayedEndDate);
    };
    var isMiddleDate = function isMiddleDate(date) {
      return dateFns.isAfter(date, displayedStartDate) && dateFns.isBefore(date, displayedEndDate);
    };
    var isEndDate = function isEndDate(date) {
      return dateFns.isSameDay(date, displayedEndDate) && dateFns.isAfter(date, displayedStartDate);
    };
    var modifiers = mergeModifiers({
      selected: function selected(date) {
        return isSelectable(date, {
          minimumDate: minimumDate,
          maximumDate: maximumDate
        }) && (isStartDate(date) || isMiddleDate(date) || isEndDate(date) || dateFns.isSameDay(date, startDate) || dateFns.isSameDay(date, endDate));
      },
      selectedStart: isStartDate,
      selectedMiddle: isMiddleDate,
      selectedEnd: isEndDate,
      disabled: function disabled(date) {
        return focus === START_DATE && endDate && (dateFns.differenceInDays(dateFns.startOfDay(endDate), date) < minimumLength && (!startDate || !dateFns.isAfter(date, dateFns.startOfDay(endDate))) || !startDate && maximumLength && dateFns.differenceInDays(dateFns.startOfDay(endDate), date) > maximumLength) || focus === END_DATE && startDate && (dateFns.differenceInDays(date, dateFns.startOfDay(startDate)) < minimumLength && (!endDate || !dateFns.isBefore(date, dateFns.startOfDay(startDate))) || !endDate && maximumLength && dateFns.differenceInDays(date, dateFns.startOfDay(startDate)) > maximumLength);
      }
    }, receivedModifiers);
    var handleSelectDate = function handleSelectDate(date) {
      if (focus === START_DATE) {
        var invalidEndDate = endDate && !isRangeLengthValid({
          startDate: date,
          endDate: endDate
        }, {
          minimumLength: minimumLength,
          maximumLength: maximumLength
        });
        if (invalidEndDate) {
          onEndDateChange(null);
        }
        onStartDateChange(startDate ? setTime(date, startDate) : date);
        onFocusChange(END_DATE);
      } else if (focus === END_DATE) {
        var invalidStartDate = startDate && !isRangeLengthValid({
          startDate: startDate,
          endDate: date
        }, {
          minimumLength: minimumLength,
          maximumLength: maximumLength
        });
        if (invalidStartDate) {
          onStartDateChange(null);
        }
        onEndDateChange(endDate ? setTime(date, endDate) : date);
        onFocusChange(invalidStartDate || !startDate ? START_DATE : null);
      }
    };
    return /*#__PURE__*/React__default.createElement(Calendar, {
      locale: locale,
      month: month,
      onMonthChange: setMonth,
      onDayHover: setHoveredDate,
      onDayClick: handleSelectDate,
      minimumDate: minimumDate,
      maximumDate: maximumDate,
      modifiers: modifiers,
      modifiersClassNames: modifiersClassNames,
      weekdayFormat: weekdayFormat,
      touchDragEnabled: touchDragEnabled
    });
  }
  DateRangePickerCalendar.propTypes = {
    locale: propTypes.object.isRequired,
    startDate: propTypes.instanceOf(Date),
    endDate: propTypes.instanceOf(Date),
    focus: propTypes.oneOf([START_DATE, END_DATE]),
    month: propTypes.instanceOf(Date),
    onStartDateChange: propTypes.func.isRequired,
    onEndDateChange: propTypes.func.isRequired,
    onFocusChange: propTypes.func.isRequired,
    onMonthChange: propTypes.func,
    minimumDate: propTypes.instanceOf(Date),
    maximumDate: propTypes.instanceOf(Date),
    minimumLength: propTypes.number,
    maximumLength: propTypes.number,
    modifiers: propTypes.objectOf(propTypes.func),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    weekdayFormat: propTypes.string,
    touchDragEnabled: propTypes.bool
  };
  DateRangePickerCalendar.defaultProps = {
    onStartDateChange: function onStartDateChange() {},
    onEndDateChange: function onEndDateChange() {},
    onFocusChange: function onFocusChange() {},
    minimumLength: 0,
    maximumLength: null
  };

  function useDateInput(_ref) {
    var selectedDate = _ref.date,
      receivedFormatString = _ref.format,
      locale = _ref.locale,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      onDateChange = _ref.onDateChange,
      validate = _ref.validate;
    var formatString = receivedFormatString || locale.formatLong.date({
      width: 'short'
    });
    var formatDate = function formatDate(date) {
      return dateFns.format(date, formatString, {
        locale: locale
      });
    };
    var parseDate = function parseDate(dateString) {
      return dateFns.parse(dateString, formatString, selectedDate || new Date());
    };
    var isValidAndSelectable = function isValidAndSelectable(date) {
      return dateFns.isValid(date) && isSelectable(date, {
        minimumDate: minimumDate,
        maximumDate: maximumDate
      }) && (!validate || validate(date));
    };
    var _useState = React.useState(isValidAndSelectable(selectedDate) ? formatDate(selectedDate) : ''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];
    var handleFocus = function handleFocus() {
      setFocused(true);
    };
    var handleChange = function handleChange(event) {
      var newValue = event.target.value;
      var parsedDate = parseDate(newValue);
      setValue(newValue);
      if (isValidAndSelectable(parsedDate)) {
        onDateChange(parsedDate);
      }
    };
    var handleBlur = function handleBlur() {
      if (value) {
        var parsedDate = parseDate(value);
        if (isValidAndSelectable(parsedDate)) {
          setValue(formatDate(parsedDate));
        } else if (isValidAndSelectable(selectedDate)) {
          setValue(formatDate(selectedDate));
        } else {
          setValue('');
        }
      } else if (selectedDate) {
        onDateChange(null);
      }
      setFocused(false);
    };
    React.useEffect(function () {
      if (!focused) {
        setValue(isValidAndSelectable(selectedDate) ? formatDate(selectedDate) : '');
      }
    }, [selectedDate, focused]); // eslint-disable-line react-hooks/exhaustive-deps

    return {
      onFocus: handleFocus,
      onChange: handleChange,
      onBlur: handleBlur,
      placeholder: formatString.toLowerCase(),
      type: 'text',
      value: value
    };
  }

  function useDetectTouch() {
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTouch = _useState2[0],
      setIsTouch = _useState2[1];
    React.useEffect(function () {
      var handleTouch = function handleTouch() {
        setIsTouch(true);
        removeListener();
      };
      var removeListener = function removeListener() {
        document.removeEventListener('touchstart', handleTouch);
      };
      document.addEventListener('touchstart', handleTouch);
      return removeListener;
    }, []);
    return isTouch;
  }

  function useOutsideClickHandler(callback) {
    var refA = React.useRef();
    var refB = React.useRef();
    var refC = React.useRef();
    React.useEffect(function () {
      var handleOutsideClick = function handleOutsideClick(event) {
        if ((!refA.current || refA.current.contains && !refA.current.contains(event.target)) && (!refB.current || refB.current.contains && !refB.current.contains(event.target)) && (!refC.current || refC.current.contains && !refC.current.contains(event.target))) {
          callback();
        }
      };
      document.addEventListener('click', handleOutsideClick);
      return function () {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [callback]);
    return [refA, refB, refC];
  }

  function DatePicker(_ref) {
    var children = _ref.children,
      locale = _ref.locale,
      date = _ref.date,
      _onDateChange = _ref.onDateChange,
      format = _ref.format,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      modifiers = _ref.modifiers,
      modifiersClassNames = _ref.modifiersClassNames,
      weekdayFormat = _ref.weekdayFormat,
      touchDragEnabled = _ref.touchDragEnabled,
      monthModifiers = _ref.monthModifiers,
      monthModifiersClassNames = _ref.monthModifiersClassNames;
    var _useState = React.useState(date || new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      month = _useState2[0],
      setMonth = _useState2[1];
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];
    var isTouch = useDetectTouch();
    var _useOutsideClickHandl = useOutsideClickHandler(function () {
        if (focused) {
          setFocused(false);
        }
      }),
      _useOutsideClickHandl2 = _slicedToArray(_useOutsideClickHandl, 2),
      inputRef = _useOutsideClickHandl2[0],
      popoverRef = _useOutsideClickHandl2[1];
    var inputProps = useDateInput({
      date: date,
      format: format,
      locale: locale,
      minimumDate: minimumDate,
      maximumDate: maximumDate,
      onDateChange: function onDateChange(date) {
        _onDateChange(date);
        date && setMonth(date);
      }
    });
    var handleDateChange = function handleDateChange(date) {
      _onDateChange(date);
      setFocused(false);
    };
    return /*#__PURE__*/React__default.createElement("div", {
      className: "nice-dates"
    }, children({
      inputProps: _objectSpread2(_objectSpread2({}, inputProps), {}, {
        ref: inputRef,
        onFocus: function onFocus() {
          inputProps.onFocus();
          setFocused(true);
          if (isTouch) {
            inputRef.current.blur();
          }
        },
        readOnly: isTouch
      }),
      focused: focused
    }), /*#__PURE__*/React__default.createElement(Popover, {
      open: focused,
      ref: popoverRef
    }, /*#__PURE__*/React__default.createElement(DatePickerCalendar, {
      locale: locale,
      date: date,
      month: month,
      onDateChange: handleDateChange,
      onMonthChange: setMonth,
      minimumDate: minimumDate,
      maximumDate: maximumDate,
      modifiers: modifiers,
      modifiersClassNames: modifiersClassNames,
      monthModifiers: monthModifiers,
      monthModifiersClassNames: monthModifiersClassNames,
      weekdayFormat: weekdayFormat,
      touchDragEnabled: touchDragEnabled
    })));
  }
  DatePicker.propTypes = {
    children: propTypes.func.isRequired,
    locale: propTypes.object.isRequired,
    date: propTypes.instanceOf(Date),
    onDateChange: propTypes.func,
    format: propTypes.string,
    minimumDate: propTypes.instanceOf(Date),
    maximumDate: propTypes.instanceOf(Date),
    modifiers: propTypes.objectOf(propTypes.func),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    weekdayFormat: propTypes.string,
    touchDragEnabled: propTypes.bool,
    monthModifiers: propTypes.objectOf(propTypes.func),
    monthModifiersClassNames: propTypes.objectOf(propTypes.string)
  };
  DatePicker.defaultProps = {
    onDateChange: function onDateChange() {}
  };

  function DateRangePicker(_ref) {
    var children = _ref.children,
      locale = _ref.locale,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      onStartDateChange = _ref.onStartDateChange,
      onEndDateChange = _ref.onEndDateChange,
      format = _ref.format,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      minimumLength = _ref.minimumLength,
      maximumLength = _ref.maximumLength,
      modifiers = _ref.modifiers,
      modifiersClassNames = _ref.modifiersClassNames,
      weekdayFormat = _ref.weekdayFormat,
      touchDragEnabled = _ref.touchDragEnabled;
    var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];
    var _useState3 = React.useState(startDate || endDate || new Date()),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];
    var isTouch = useDetectTouch();
    var _useOutsideClickHandl = useOutsideClickHandler(function () {
        setFocus(null);
      }),
      _useOutsideClickHandl2 = _slicedToArray(_useOutsideClickHandl, 3),
      startDateInputRef = _useOutsideClickHandl2[0],
      endDateInputRef = _useOutsideClickHandl2[1],
      popoverRef = _useOutsideClickHandl2[2];
    var startDateInputProps = useDateInput({
      date: startDate,
      format: format,
      locale: locale,
      maximumDate: maximumDate,
      minimumDate: minimumDate,
      onDateChange: function onDateChange(date) {
        onStartDateChange(date);
        date && setMonth(date);
      },
      validate: function validate(date) {
        return !endDate || isRangeLengthValid({
          startDate: date,
          endDate: endDate
        }, {
          minimumLength: minimumLength,
          maximumLength: maximumLength
        });
      }
    });
    var endDateInputProps = useDateInput({
      date: endDate,
      format: format,
      locale: locale,
      maximumDate: maximumDate,
      minimumDate: minimumDate,
      onDateChange: function onDateChange(date) {
        onEndDateChange(date);
        date && setMonth(date);
      },
      validate: function validate(date) {
        return !startDate || isRangeLengthValid({
          startDate: startDate,
          endDate: date
        }, {
          minimumLength: minimumLength,
          maximumLength: maximumLength
        });
      }
    });
    return /*#__PURE__*/React__default.createElement("div", {
      className: "nice-dates"
    }, children({
      startDateInputProps: _objectSpread2(_objectSpread2({}, startDateInputProps), {}, {
        onFocus: function onFocus() {
          startDateInputProps.onFocus();
          setFocus(START_DATE);
          if (isTouch) {
            startDateInputRef.current.blur();
          }
        },
        ref: startDateInputRef,
        readOnly: isTouch
      }),
      endDateInputProps: _objectSpread2(_objectSpread2({}, endDateInputProps), {}, {
        onFocus: function onFocus() {
          endDateInputProps.onFocus();
          setFocus(END_DATE);
          if (isTouch) {
            endDateInputRef.current.blur();
          }
        },
        ref: endDateInputRef,
        readOnly: isTouch
      }),
      focus: focus
    }), /*#__PURE__*/React__default.createElement(Popover, {
      open: !!focus,
      ref: popoverRef
    }, /*#__PURE__*/React__default.createElement(DateRangePickerCalendar, {
      locale: locale,
      startDate: startDate,
      endDate: endDate,
      focus: focus,
      month: month,
      onStartDateChange: onStartDateChange,
      onEndDateChange: onEndDateChange,
      onFocusChange: setFocus,
      onMonthChange: setMonth,
      minimumDate: minimumDate,
      maximumDate: maximumDate,
      minimumLength: minimumLength,
      maximumLength: maximumLength,
      modifiers: modifiers,
      modifiersClassNames: modifiersClassNames,
      weekdayFormat: weekdayFormat,
      touchDragEnabled: touchDragEnabled
    })));
  }
  DateRangePicker.propTypes = {
    children: propTypes.func.isRequired,
    locale: propTypes.object.isRequired,
    startDate: propTypes.instanceOf(Date),
    endDate: propTypes.instanceOf(Date),
    onStartDateChange: propTypes.func,
    onEndDateChange: propTypes.func,
    format: propTypes.string,
    minimumDate: propTypes.instanceOf(Date),
    maximumDate: propTypes.instanceOf(Date),
    minimumLength: propTypes.number,
    maximumLength: propTypes.number,
    modifiers: propTypes.objectOf(propTypes.func),
    modifiersClassNames: propTypes.objectOf(propTypes.string),
    weekdayFormat: propTypes.string,
    touchDragEnabled: propTypes.bool
  };
  DateRangePicker.defaultProps = {
    onStartDateChange: function onStartDateChange() {},
    onEndDateChange: function onEndDateChange() {},
    minimumLength: 0,
    maximumLength: null
  };

  exports.Calendar = Calendar;
  exports.CalendarDay = CalendarDay;
  exports.CalendarGrid = CalendarGrid;
  exports.CalendarNavigation = CalendarNavigation;
  exports.CalendarWeekHeader = CalendarWeekHeader;
  exports.DatePicker = DatePicker;
  exports.DatePickerCalendar = DatePickerCalendar;
  exports.DateRangePicker = DateRangePicker;
  exports.DateRangePickerCalendar = DateRangePickerCalendar;
  exports.END_DATE = END_DATE;
  exports.Popover = Popover;
  exports.START_DATE = START_DATE;
  exports.useDateInput = useDateInput;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
